var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')

var schema = buildSchema(`

  type Todo {
    id: ID!,
    text: String,
    complete: Boolean
  }

  type User {
    id: ID!,
    totalCount: Int,
    todos: [Todo]
  }

  type Query {
    quoteOfTheDay(x: Int, y: Int): String
    random: Float!
    rollThreeDice: [Int],
    user: User
  }
`);

class Todo{
  constructor({id, text, complete}){
    this.id = id,
    this.text = text,
    this.complete = complete
  }
}

const todos = [new Todo({
  id: 1,
  text: 'Learn this',
  complete: false
}), new Todo({
  id: 2,
  text: 'Do that',
  complete: true
})]

var root = {
  quoteOfTheDay: ({x, y}) => {
  	return `${x} + ${y} = ${x+y}`
  },
  random: () => Math.random(),
  rollThreeDice: () => [1, 2, 3].map(_ => 1 + Math.floor(Math.random()*6)),
  user: () => new User()
};



class User{
  constructor(){
    this.id = 11
  }
  totalCount(){
    return todos.length
  }
  todos(){
    return todos
  }
}

var app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));