/**
 * @flow
 * @relayHash 6c1623e4e99a1633c43a937c397a2717
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SaveDiliveryInfoMutationVariables = {|
  input: {
    userName: string;
    fullName?: ?string;
    address?: ?string;
    phone?: ?string;
  };
|};
export type SaveDiliveryInfoMutationResponse = {|
  +saveDiliveryInfo: ?{|
    +id: ?string;
    +fullName: ?string;
    +address: ?string;
    +phone: ?string;
  |};
|};
*/


/*
mutation SaveDiliveryInfoMutation(
  $input: DiliveryInfoInput!
) {
  saveDiliveryInfo(input: $input) {
    id
    fullName
    address
    phone
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DiliveryInfoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SaveDiliveryInfoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DiliveryInfoInput!"
          }
        ],
        "concreteType": "User",
        "name": "saveDiliveryInfo",
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
  "name": "SaveDiliveryInfoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DiliveryInfoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SaveDiliveryInfoMutation",
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
            "type": "DiliveryInfoInput!"
          }
        ],
        "concreteType": "User",
        "name": "saveDiliveryInfo",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation SaveDiliveryInfoMutation(\n  $input: DiliveryInfoInput!\n) {\n  saveDiliveryInfo(input: $input) {\n    id\n    fullName\n    address\n    phone\n  }\n}\n"
};

module.exports = batch;
