import React from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import Todo from './Todo'

class TodoList extends React.Component{
  onChange = todo => {}
  render(){
    const {userTodoData: {todos, totalCount}} = this.props
    return <section>
      <div>Total count: {totalCount}</div>
      <ul>
        {todos.map(todo => {
          return <Todo
            key={todo.id}
            todo={todo}
            onChange={todo => this.onChange(todo)}
          />
        })}
      </ul>
    </section>
  }
}

export default createFragmentContainer(TodoList, graphql`
  fragment TodoList_userTodoData on User{
    id,
    totalCount,
    todos{
      id,
      ...Todo_todo
    }
  }
`)