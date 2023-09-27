import React, {useState} from 'react'
import TodoList from './TodoList'

const TodoApp = () => {

    
    const [todoList, setTodoList] = useState([])
    const [todoText, setTodoText] = useState("")

    const handleAdd = ()=>{
        const newArrList = structuredClone(todoList)
        newArrList.push(todoText)
        setTodoList(newArrList)
        setTodoText("")
    }

    
    
    return (
    <>
    <input type='text' onChange={(event)=>{setTodoText(event.target.value)}} value={todoText}></input>
    <button onClick={()=>{handleAdd()}}>enviar</button>
    <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </>
  )
}

export default TodoApp