import { graphql, commitMutation } from "react-relay";

const mutation = graphql`
  mutation SubmitCartMutation($input: SubmitCartInput!) {
    submitCart(input: $input) {
      id
      isSubmitted
      paymentMethodId
    }
  }
`;

export function commit({
  environment,
  userName,
  paymentMethodId,
  cartId,
  onCompleted
}) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { userName, paymentMethodId }
    },
    optimisticResponse: {
      submitCart: {
        id: cartId,
        isSubmitted: true,
        paymentMethodId
      }
    },
    onCompleted
  });
}
