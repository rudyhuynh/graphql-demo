/**
 * @flow
 * @relayHash 0eb19793ae7843636bf81c5fc050854b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SubmitCartMutationVariables = {|
  input: {
    userName: string;
    paymentMethodId: string;
  };
|};
export type SubmitCartMutationResponse = {|
  +submitCart: ?{|
    +id: ?string;
    +isSubmitted: ?boolean;
    +paymentMethodId: ?string;
  |};
|};
*/


/*
mutation SubmitCartMutation(
  $input: SubmitCartInput!
) {
  submitCart(input: $input) {
    id
    isSubmitted
    paymentMethodId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SubmitCartInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SubmitCartMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SubmitCartInput!"
          }
        ],
        "concreteType": "Cart",
        "name": "submitCart",
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
            "name": "isSubmitted",
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
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SubmitCartMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SubmitCartInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SubmitCartMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SubmitCartInput!"
          }
        ],
        "concreteType": "Cart",
        "name": "submitCart",
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
            "name": "isSubmitted",
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
    ]
  },
  "text": "mutation SubmitCartMutation(\n  $input: SubmitCartInput!\n) {\n  submitCart(input: $input) {\n    id\n    isSubmitted\n    paymentMethodId\n  }\n}\n"
};

module.exports = batch;
