import React from "react"

function TodoItem(props) {
  return(
   <li>
       <input type="checkbox" 
       checked={props.todo.completed} 
       onChange={() => props.handleChangeProps(props.todo.id)}
       /> 
       {props.todo.title}
       <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
           Delete</button>
       </li>
       
   )
}

export default TodoItem