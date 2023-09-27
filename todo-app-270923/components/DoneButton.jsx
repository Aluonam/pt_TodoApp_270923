import React from 'react'

const DoneButton = ({actualElement, index, todoList, setTodoList}) => {


    const handleCompleteTask = () => {
        const updatedTasks = structuredClone(todoList);
        const isCompleted = updatedTasks[index].includes('✅')
        if(!isCompleted){
            updatedTasks[index] = `✅ ${updatedTasks[index]}`
            setTodoList(updatedTasks);
            }
      };

  return (
    <button onClick={()=>{handleCompleteTask()}}>completado</button>
  )
}

export default DoneButton