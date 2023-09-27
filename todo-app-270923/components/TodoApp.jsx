import React, {useState} from 'react'

const TodoApp = () => {

    
    const [todoList, setTodoList] = useState([])
    const [todoText, setTodoText] = useState("")

    const handleAdd = ()=>{
        setTodoList([...todoList,todoText])
        setTodoText("")
    }
    
    return (
    <>
    {todoList}
    <input type='text' onChange={(event)=>{setTodoText(event.target.value)}} value={todoText}></input>
    <button onClick={()=>{handleAdd()}}>enviar</button>
    </>
  )
}

export default TodoApp