import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull
} from "graphql/type";
import dbUtils from "../db/dbUtils";
import { products } from "../db/init/products";
import { paymentMethods } from "../db/init/paymentMethods";

const paymentMethodType = new GraphQLObjectType({
  name: "PaymentMethod",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
});

const cartProductType = new GraphQLObjectType({
  name: "CartProduct",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    remain: { type: GraphQLInt },
    price: { type: GraphQLFloat },
    quantity: {
      type: GraphQLInt,
      resolve: cartProduct => cartProduct.quantity || 0
    }
  }
});

const cartType = new GraphQLObjectType({
  name: "Cart",
  fields: {
    id: { type: GraphQLString },
    products: {
      type: GraphQLNonNull(GraphQLList(cartProductType)),
      resolve: async cart => {
        const products = await dbUtils
          .getDb()
          .collection("product")
          .find({
            id: { $in: cart.products.map(product => product.productId) }
          })
          .toArray();

        const cartProducts = products.map(product =>
          Object.assign({}, product, {
            quantity: (
              cart.products.find(({ productId }) => productId === product.id) ||
              {}
            ).quantity
          })
        );

        return cartProducts;
      }
    },
    paymentMethodId: {
      type: GraphQLString,
      resolve: cart =>
        dbUtils
          .getDb()
          .collection("paymentMethod")
          .findOne({ id: cart.paymentMethod }).id
    },
    currentStep: { type: GraphQLInt },
    isSubmitted: { type: GraphQLBoolean }
  }
});

const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    userName: { type: GraphQLString },
    fullName: { type: GraphQLString },
    address: { type: GraphQLString },
    phone: { type: GraphQLString },
    cart: {
      type: cartType,
      resolve: user => user.cart
    }
  }
});

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: userType,
      args: {
        userName: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (_, { userName }) =>
        dbUtils
          .getDb()
          .collection("user")
          .findOne({ userName })
    },
    paymentMethods: {
      type: GraphQLList(paymentMethodType),
      resolve: () =>
        dbUtils
          .getDb()
          .collection("paymentMethod")
          .find({})
          .toArray()
    }
  }
});

const changeCartProductQuantityInput = new GraphQLInputObjectType({
  name: "ChangeCartProductQuantityInput",
  fields: {
    userName: { type: GraphQLNonNull(GraphQLString) },
    productId: { type: GraphQLNonNull(GraphQLString) },
    quantity: { type: GraphQLNonNull(GraphQLInt) }
  }
});

const userInput = new GraphQLInputObjectType({
  name: "UserInput",
  fields: {
    userName: { type: GraphQLNonNull(GraphQLString) },
    fullName: { type: GraphQLString },
    address: { type: GraphQLString },
    phone: { type: GraphQLString }
  }
});

const diliveryInfoInputType = new GraphQLInputObjectType({
  name: "DiliveryInfoInput",
  fields: {
    userName: { type: GraphQLNonNull(GraphQLString) },
    fullName: { type: GraphQLString },
    address: { type: GraphQLString },
    phone: { type: GraphQLString }
  }
});

const submitCartInputType = new GraphQLInputObjectType({
  name: "SubmitCartInput",
  fields: {
    userName: { type: GraphQLNonNull(GraphQLString) },
    paymentMethodId: { type: GraphQLNonNull(GraphQLString) }
  }
});

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    initProducts: {
      type: GraphQLBoolean,
      resolve: async () => {
        const productCollection = dbUtils.getDb().collection("product");
        await productCollection.insert(products);
        return true;
      }
    },
    initPaymentMethods: {
      type: GraphQLBoolean,
      resolve: async () => {
        const paymentMethodCollection = dbUtils
          .getDb()
          .collection("paymentMethod");
        await paymentMethodCollection.insert(paymentMethods);
        return true;
      }
    },
    createUser: {
      type: userType,
      args: {
        user: { type: userInput }
      },
      resolve: async (_, { user }) => {
        const { userName, fullName, address, phone } = user;
        const userCollection = dbUtils.getDb().collection("user");
        let dbUser = await userCollection.findOne({ userName });
        if (!dbUser) {
          const newUser = {
            id: userName,
            userName,
            fullName,
            address,
            phone,
            cart: {
              id: `${userName}_cart`,
              products: [
                { productId: "product1", quantity: 3 },
                { productId: "product2", quantity: 4 },
                { productId: "product3", quantity: 5 }
              ],
              paymentMethod: "paymentMethod1"
            }
          };
          await userCollection.insertOne(newUser);
          return newUser;
        } else {
          return dbUser;
        }
        return true;
      }
    },
    changeCartProductQuantity: {
      type: cartProductType,
      args: {
        input: { type: GraphQLNonNull(changeCartProductQuantityInput) }
      },
      resolve: async (_, { input }) => {
        const { userName, productId, quantity } = input;
        await dbUtils
          .getDb()
          .collection("user")
          .findAndModify(
            {
              userName,
              "cart.products.productId": productId
            },
            null,
            {
              $set: {
                "cart.products.$.quantity": quantity
              }
            }
          );

        return {
          id: productId,
          quantity
        };
      }
    },
    saveDiliveryInfo: {
      type: userType,
      args: {
        input: { type: GraphQLNonNull(diliveryInfoInputType) }
      },
      resolve: async (_, { input }) => {
        const { userName, fullName, address, phone } = input;
        await dbUtils
          .getDb()
          .collection("user")
          .findAndModify(
            {
              userName
            },
            null,
            {
              $set: {
                fullName,
                address,
                phone
              }
            }
          );

        return {
          id: userName,
          fullName,
          address,
          phone
        };
      }
    },
    submitCart: {
      type: cartType,
      args: {
        input: { type: GraphQLNonNull(submitCartInputType) }
      },
      resolve: async (_, { input }) => {
        const { userName, paymentMethodId } = input;

        const user = await dbUtils
          .getDb()
          .collection("user")
          .findAndModify({ userName }, null, {
            $set: {
              "cart.isSubmitted": true,
              "cart.paymentMethodId": paymentMethodId
            }
          });

        return {
          id: user.cart.id,
          isSubmitted: true,
          paymentMethodId: paymentMethodId
        };
      }
    }
  }
});

// const subscription = new GraphQLObjectType({
//   name: "Subscription",

// })

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
  //subscription: subscriptionType
});

export default schema;
