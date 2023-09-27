import React, {useState} from 'react'

const TodoApp = () => {

    
    const [todoList, setTodoList] = useState([])
    const [todoText, setTodoText] = useState("")
  return (
    <>
    {todoList}
    </>
  )
}

export default TodoApp