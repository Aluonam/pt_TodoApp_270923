import React from 'react'

const TodoList = ({todoList}) => {

    const showList = todoList.map((actualElement)=>{
        return(
            <>
            <ul>
                <li>{actualElement}</li>
            </ul>
            </>
        )
    })
  return (
    <div>{showList}</div>
  )
}

export default TodoList