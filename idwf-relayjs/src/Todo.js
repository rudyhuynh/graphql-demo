import React from 'react'
import {graphql, createFragmentContainer} from 'react-relay'

class Todo extends React.Component{
  render(){
    const {complete, text} = this.props.todo;

    return <li>
      <div>
        <input checked={complete} type="checkbox" onChange={this.props.onChange}/>
        <label>{text}</label>
      </div>
    </li>
  }
}
export default createFragmentContainer(Todo, graphql`
  # <ComponentFileName>_<propName>
  fragment Todo_todo on Todo{
    complete
    text
  }
`)