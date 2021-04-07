import React, { useState, useEffect } from 'react';
function NewTask(props){
    const [taskText,setTask] = useState(true)
    function handlerChage(event) {
        const value = event.target.value
        setTask(value)
       
    }
    function handlerSubmit(event){
        event.preventDefault()
        props.new(taskText,props.list)
        props.setSave(false)
    }
    return (
        <form onSubmit={handlerSubmit}>
        <input
            type="text"
            placeholder="Задача"
            onChange={handlerChage}
            name="text"
        />
         <input type="submit" value="+" />
        </form>
    )
}
export default NewTask