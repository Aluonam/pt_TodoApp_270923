import React, {useState} from 'react'

const TodoApp = () => {

    
    const [todoList, setTodoList] = useState([])
    const [todoText, setTodoText] = useState("")

    const handleAdd = ()=>{
        const newArrList = structuredClone(todoList)
        newArrList.push(todoText)
        setTodoList(newArrList)
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
    <input type='text' onChange={(event)=>{setTodoText(event.target.value)}} value={todoText}></input>
    <button onClick={()=>{handleAdd()}}>enviar</button>
    {showList}
    </>
  )
}

export default TodoApp