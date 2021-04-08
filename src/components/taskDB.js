import React, { useState, useEffect } from "react"
    import TaskList from "./taskList"
    import Modal from "./modal"
import NewTask from "./newTask"
import { connect } from "react-redux"
import { newTask, removeTask, doneTask, editTask, removeList, newList, cancel } from "../data/taskStore"
import {BrowserRouter,Switch, Route, Link} from "react-router-dom";
function TaskDB(props) {
    localStorage.setItem("todoStore", JSON.stringify(props.tasks))
    const [typeModal, setTypeModal] = useState('')
    const [headModal, setHeadModal] = useState('')
    const [textModal, setTextModal] = useState('')
    const [idModal, setIDModal] = useState('')

    const navArray = props.tasks.map(task => {
        return (
            <div key={task.id} className="list">
                <div className="deleteButtonConteiter"> <button className="deleteButton" onClick={() => {setTypeModal("removeList")
                                    setHeadModal("Подтверждение удаления")
                                    setTextModal(task.header)
                                    setIDModal(task.id)
                                    document.getElementById("modal").classList.add("modalShow")
                                    document.getElementById("modal").classList.remove("modalHide")
                        }}>✖</button></div>
                <Link to={"/" + task.id}>{task.header}<TaskList head={task.header} kay={task.id} store={task.store} readonly={true} /></Link>
                
            </div>
        )
    })

    const infoArray = props.tasks.map(task => {
        return (
            <Route key={task.id} path={"/" + task.id}>
                <nav>
                    <Link to="/">Назад</Link>
                </nav>
                <TaskList head={task.header} kay={task.id} id={task.id}  store={task.store} readonly={false} cancel={props.cancel} new={props.newTask} doneTask={props.doneTask} removeTask={props.removeTask} editTask={props.editTask} />
            </Route>
        )
    })

    return (
        <div>
            <BrowserRouter>
                <div>


                    <Switch>
                        {infoArray}
                        <Route path="/">  <Modal type={typeModal} head={headModal} listName={textModal} id={idModal} removeList={props.removeList} newList={props.newList}/> <Home arr={navArray} /> 
                        <button onClick={() => {setTypeModal("newList")
                                    setHeadModal("Создать заметку")
                                    document.getElementById("modal").classList.add("modalShow")
                                    document.getElementById("modal").classList.remove("modalHide")
                        }}>+</button></Route>
                    </Switch>
                </div>
            </BrowserRouter>
           
        </div>
    )
}
function Home(props) {
    return (<nav>
        <div>
            {props.arr}
        </div>
      
    </nav>)
}

function mapStateToProps(state) {
    return { tasks: state.DBData }
}
const mapDispathToProps = {
    newTask: newTask,
    removeTask: removeTask,
    doneTask: doneTask,
    editTask: editTask,
    removeList: removeList,
    newList: newList,
    cancel: cancel
}
export default connect(mapStateToProps, mapDispathToProps)(TaskDB)