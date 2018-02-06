/**
 * @flow
 * @relayHash 159efc402cb991b7352f1d7278770c69
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type OrderContainerQueryResponse = {|
  +user: ?{|
    +id: ?string;
    +userName: ?string;
    +cart: ?{|
      +currentStep: ?number;
    |};
  |};
|};
*/


/*
query OrderContainerQuery(
  $userName: String!
) {
  user(userName: $userName) {
    id
    userName
    ...Step2Address_diliveryInfo
    ...Step3PaymentMethod_diliveryInfo
    cart {
      currentStep
      ...Step1Cart_cart
      ...Step3PaymentMethod_cart
    }
  }
  ...Step3PaymentMethod_query
}

fragment Step2Address_diliveryInfo on User {
  userName
  fullName
  address
  phone
}

fragment Step3PaymentMethod_diliveryInfo on User {
  userName
  fullName
  address
  phone
}

fragment Step1Cart_cart on Cart {
  products {
    id
    name
    remain
    price
    quantity
  }
}

fragment Step3PaymentMethod_cart on Cart {
  id
  products {
    id
    name
    quantity
    price
  }
  paymentMethodId
}

fragment Step3PaymentMethod_query on Query {
  paymentMethods {
    id
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "userName",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userName",
            "variableName": "userName",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "userName",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Step2Address_diliveryInfo",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Step3PaymentMethod_diliveryInfo",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Cart",
            "name": "cart",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "currentStep",
                "storageKey": null
              },
              {
                "kind": "FragmentSpread",
                "name": "Step1Cart_cart",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "Step3PaymentMethod_cart",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "FragmentSpread",
        "name": "Step3PaymentMethod_query",
        "args": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "OrderContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "userName",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "OrderContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userName",
            "variableName": "userName",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "userName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "fullName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "address",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "phone",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Cart",
            "name": "cart",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "currentStep",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "CartProduct",
                "name": "products",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "remain",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "quantity",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "paymentMethodId",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "PaymentMethod",
        "name": "paymentMethods",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query OrderContainerQuery(\n  $userName: String!\n) {\n  user(userName: $userName) {\n    id\n    userName\n    ...Step2Address_diliveryInfo\n    ...Step3PaymentMethod_diliveryInfo\n    cart {\n      currentStep\n      ...Step1Cart_cart\n      ...Step3PaymentMethod_cart\n    }\n  }\n  ...Step3PaymentMethod_query\n}\n\nfragment Step2Address_diliveryInfo on User {\n  userName\n  fullName\n  address\n  phone\n}\n\nfragment Step3PaymentMethod_diliveryInfo on User {\n  userName\n  fullName\n  address\n  phone\n}\n\nfragment Step1Cart_cart on Cart {\n  products {\n    id\n    name\n    remain\n    price\n    quantity\n  }\n}\n\nfragment Step3PaymentMethod_cart on Cart {\n  id\n  products {\n    id\n    name\n    quantity\n    price\n  }\n  paymentMethodId\n}\n\nfragment Step3PaymentMethod_query on Query {\n  paymentMethods {\n    id\n    name\n  }\n}\n"
};

module.exports = batch;
