import React, { useState} from 'react';
function Task(props) {
    const [taskText, setText] = useState("")
    const [edit, setEdit] = useState(false)

    function handlerChage(event) {
        const value = event.target.value
        setText(value)
    }
    function handlerSubmit(event) {
        console.log(taskText)
        event.preventDefault()
        props.editTask({ id: props.task.id, text: taskText, done: props.task.done }, props.list)
        setEdit(!edit)

    }

    return (
        <li className={props.task.done ? "doneTask" : ""}>
            {props.readonly ? "" : <input
                type="checkbox"
                checked={props.task.done}
                onChange={() => {
                    props.doneTask(
                        props.task.id, props.list)
                        props.setSave(false)
                }} />}
            {edit ? <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    placeholder="Задача"
                    value={taskText}
                    onChange={handlerChage}
                    name="text"
                />
                <input type="submit" value="ok" />
            </form> : props.task.text}
            {props.readonly ? "" : <button className="editButton" onClick={() => { setEdit(!edit); setText(props.task.text) }} >🖍</button>}
            {props.readonly ? "" : <button className="deleteButton" onClick={() => props.removeTask(props.task.id, props.list)}>✖</button>}

        </li>
    )
}
export default Task