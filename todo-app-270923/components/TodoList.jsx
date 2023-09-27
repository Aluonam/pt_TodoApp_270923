import React from 'react'
import DoneButton from './DoneButton'

const TodoList = ({todoList, setTodoList}) => {

    const showList = todoList.map((actualElement, index)=>{
        return(
            <>
            <ul>
                <li>{actualElement}</li>
                <DoneButton actualElement={actualElement} index={index} todoList={todoList} setTodoList={setTodoList}></DoneButton>
            </ul>
            </>
        )
    })
  return (
    <div>{showList}</div>
  )
}

export default TodoList