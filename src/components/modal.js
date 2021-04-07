import React, { useState, useEffect } from "react"
function Modal(props) {
    const [text, setText] = useState('')


    function handlerChage(event) {
        const value = event.target.value
        setText(value)

    }
    function handlerSubmit(event) {
        event.preventDefault()
        props.newList(text)
        document.getElementById("modal").classList.remove("modalShow")
        document.getElementById("modal").classList.add("modalHide")
    }
    return (
        <div id="modal" className="modalHide">
            <div className="modal">
                <div className="modalHead">{props.head}</div>
                {props.type == "newList" ? <form onSubmit={handlerSubmit}>
                    <input
                        type="text"
                        placeholder="Имя заметки"
                        onChange={handlerChage}
                        name="text"
                    />
                    <br /><input type="submit" value="Ok" />
                    <input type="button" value="Отмена" onClick={() => {
                        document.getElementById("modal").classList.remove("modalShow")
                        document.getElementById("modal").classList.add("modalHide")
                    }} />
                </form> : ""
                }
                {props.type == "removeList" ? <div><h5>Удалить заметку {props.listName}</h5>
                <button onClick={() => {
                       props.removeList(props.id)
                        document.getElementById("modal").classList.remove("modalShow")
                        document.getElementById("modal").classList.add("modalHide")}}>Да</button>
                <button onClick={() => {
                        document.getElementById("modal").classList.remove("modalShow")
                        document.getElementById("modal").classList.add("modalHide")
                    }}>Нет</button></div> : ""
                }
            </div>
        </div>
    )
}
export default Modal