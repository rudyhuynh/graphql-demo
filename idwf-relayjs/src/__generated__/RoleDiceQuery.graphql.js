/**
 * @flow
 * @relayHash fa07e560053905d887d97a2503940959
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RoleDiceQueryResponse = {|
  +random: number;
  +quoteOfTheDay: ?string;
  +user: ?{| |};
|};
*/


/*
query RoleDiceQuery(
  $x: Int
  $y: Int
) {
  random
  quoteOfTheDay(x: $x, y: $y)
  user {
    ...TodoList_userTodoData
    id
  }
}

fragment TodoList_userTodoData on User {
  id
  totalCount
  todos {
    id
    ...Todo_todo
  }
}

fragment Todo_todo on Todo {
  complete
  text
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "x",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "y",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoleDiceQuery",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "random",
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "x",
            "variableName": "x",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "y",
            "variableName": "y",
            "type": "Int"
          }
        ],
        "name": "quoteOfTheDay",
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TodoList_userTodoData",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RoleDiceQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "x",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "y",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RoleDiceQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "random",
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "x",
            "variableName": "x",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "y",
            "variableName": "y",
            "type": "Int"
          }
        ],
        "name": "quoteOfTheDay",
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
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
            "name": "totalCount",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "name": "todos",
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
                "kind": "InlineFragment",
                "type": "Todo",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "complete",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "text",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query RoleDiceQuery(\n  $x: Int\n  $y: Int\n) {\n  random\n  quoteOfTheDay(x: $x, y: $y)\n  user {\n    ...TodoList_userTodoData\n    id\n  }\n}\n\nfragment TodoList_userTodoData on User {\n  id\n  totalCount\n  todos {\n    id\n    ...Todo_todo\n  }\n}\n\nfragment Todo_todo on Todo {\n  complete\n  text\n}\n"
};

module.exports = batch;
