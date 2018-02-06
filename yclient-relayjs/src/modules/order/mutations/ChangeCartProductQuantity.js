import { graphql, commitMutation } from "react-relay";

const mutation = graphql`
  mutation ChangeCartProductQuantityMutation(
    $input: ChangeCartProductQuantityInput!
  ) {
    changeCartProductQuantity(input: $input) {
      id
      quantity
    }
  }
`;

export function commit(environment, userName, productId, quantity) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { userName, productId, quantity }
    },
    optimisticResponse: {
      changeCartProductQuantity: {
        id: productId,
        quantity: quantity
      }
    }
  });
}
