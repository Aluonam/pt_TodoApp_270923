import React, {useState} from 'react'

const TodoApp = () => {

    
    const [todoList, setTodoList] = useState([])
    const [todoText, setTodoText] = useState("")

    const handleAdd = ()=>{
        setTodoList([...todoList,todoText])
        setTodoText("")
    }

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
    <>
    {todoList}
    <input type='text' onChange={(event)=>{setTodoText(event.target.value)}} value={todoText}></input>
    <button onClick={()=>{handleAdd()}}>enviar</button>
    {showList}
    </>
  )
}

export default TodoApp