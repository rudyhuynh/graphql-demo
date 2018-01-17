import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {graphql, QueryRenderer} from 'react-relay'
import environment from './relay-config/environment'
import TodoList from './TodoList'

class RoleDice extends Component {
  render() {
    return (
      <QueryRenderer 
        environment={environment}
        query={graphql`
          query RoleDiceQuery($x: Int, $y: Int){
            random,
            quoteOfTheDay(x: $x, y: $y),
            user {
              ...TodoList_userTodoData
            }
          }
        `}
        variables={{
          x: 1,
          y: 2
        }}
        render={({error, props}) => {
          if (error){
            return <div>Error!</div>
          }
          if (!props){
            return <div>Loading...</div>
          }
          return <div>
            <div>Random: {props.random}</div>
            <div>quoteOfTheDay: {props.quoteOfTheDay}</div>
            <div>
              <TodoList userTodoData={props.user}/>
            </div>
          </div>
        }}
      />
    );
  }
}

export default RoleDice;
