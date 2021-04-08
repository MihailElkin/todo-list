import React, { useState, useEffect } from "react"
import Task from "./task"
import NewTask from "./newTask"
function TaskList(props) {
    const [isSave, setSave] = useState(true)
    useEffect(() => {
        if (!props.readonly) {
            localStorage.removeItem(props.id)
            localStorage.setItem(props.id, JSON.stringify(props.store))
            console.log("effect")
        }
    }, [])
    var taskArray = props.store.map((task) => task.done ? "" : <Task setSave={setSave} kay={task.id} task={task} doneTask={props.doneTask} removeTask={props.removeTask} editTask={props.editTask} readonly={props.readonly} list={props.kay} />)
    var taskArrayDone = props.store.map((task) => task.done ? <Task setSave={setSave} kay={task.id} task={task} doneTask={props.doneTask} removeTask={props.removeTask} editTask={props.editTask} readonly={props.readonly} list={props.kay} /> : "")
    return (
        <div >
            {props.readonly ? "" :<h3>{props.head}</h3>}
            <ol>
                {taskArray}
                {taskArrayDone}
            </ol>
            {props.readonly ? "" : <NewTask setSave={setSave} new={props.new} list={props.kay} />}
            {isSave|| props.readonly ? "" : <button onClick={() => {
                setSave(true)
                localStorage.removeItem(props.id)
                localStorage.setItem(props.id, JSON.stringify(props.store))
            }

            }>Сохранить</button>}
            {isSave|| props.readonly ? "" : <button onClick={() => {
                props.cancel(props.kay)
                setSave(true)
            }}>Отмена</button>}
        </div>
    )
}
export default TaskList