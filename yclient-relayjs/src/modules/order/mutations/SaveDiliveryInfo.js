import { graphql, commitMutation } from "react-relay";

const mutation = graphql`
  mutation SaveDiliveryInfoMutation($input: DiliveryInfoInput!) {
    saveDiliveryInfo(input: $input) {
      id
      fullName
      address
      phone
    }
  }
`;

export function commit(environment, userName, fullName, address, phone) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { userName, fullName, address, phone }
    },
    optimisticResponse: {
      saveDiliveryInfo: {
        id: userName,
        fullName,
        address,
        phone
      }
    }
  });
}
