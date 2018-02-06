/**
 * @flow
 * @relayHash f693bf8b81cfb68f595bb89200721932
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ChangeCartProductQuantityMutationVariables = {|
  input: {
    userName: string;
    productId: string;
    quantity: number;
  };
|};
export type ChangeCartProductQuantityMutationResponse = {|
  +changeCartProductQuantity: ?{|
    +id: ?string;
    +quantity: ?number;
  |};
|};
*/


/*
mutation ChangeCartProductQuantityMutation(
  $input: ChangeCartProductQuantityInput!
) {
  changeCartProductQuantity(input: $input) {
    id
    quantity
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ChangeCartProductQuantityInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangeCartProductQuantityMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ChangeCartProductQuantityInput!"
          }
        ],
        "concreteType": "CartProduct",
        "name": "changeCartProductQuantity",
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
            "name": "quantity",
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
  "name": "ChangeCartProductQuantityMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ChangeCartProductQuantityInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ChangeCartProductQuantityMutation",
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
            "type": "ChangeCartProductQuantityInput!"
          }
        ],
        "concreteType": "CartProduct",
        "name": "changeCartProductQuantity",
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
            "name": "quantity",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation ChangeCartProductQuantityMutation(\n  $input: ChangeCartProductQuantityInput!\n) {\n  changeCartProductQuantity(input: $input) {\n    id\n    quantity\n  }\n}\n"
};

module.exports = batch;
