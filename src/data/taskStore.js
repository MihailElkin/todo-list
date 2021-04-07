import { createStore } from "redux"

const initialStore = {
    DBData: localStorage.getItem("todoStore")? JSON.parse(localStorage.getItem("todoStore")) : [
        {
            id: 1,
            store: [
                {
                    id: 1,
                    text: "дело раз",
                    done: false
                },
                {
                    id: 2,
                    text: "дело дваз",
                    done: false
                }
                ,
                {
                    id: 3,
                    text: "дело триз",
                    done: false
                }
            ],
            color: 'red'
        },
        {
            id: 2,
            store: [
                {
                    id: 1,
                    text: "дело раз",
                    done: true
                },
                {
                    id: 2,
                    text: "дело дваз",
                    done: false
                }
                ,
                {
                    id: 3,
                    text: "дело триз",
                    done: false
                }
            ],
            color: 'red'
        }
        ,
        {
            id: 3,
            store: [
                {
                    id: 1,
                    text: "дело раз",
                    done: false
                },
                {
                    id: 2,
                    text: "дело дваз",
                    done: true
                }
                ,
                {
                    id: 3,
                    text: "дело триз",
                    done: false
                }
            ],
            color: 'red'
        }
    ]
};
export function newTask(text, listId) {
    return {
        type: "NEW_TASK",
        payload: { text: text, listId: listId }
    }

}
export function editTask(task, listId) {
    return {
        type: "EDIT_TASK",
        payload: { task: task, listId: listId }
    }
}
export function removeTask(id, listId) {
    return {
        type: "REMOVE_TASK",
        payload: { id: id, listId: listId }
    }
}
export function doneTask(id, listId) {
    return {
        type: "DONE_TASK",
        payload: { id: id, listId: listId }
    }
}


export function newList(header) {
    return {
        type: "NEW_LIST",
        payload: header
    }
}
export function removeList(listId) {
    return {
        type: "REMOVE_LIST",
        payload: listId
    }
}
export function cancel(listId) {
    return {
        type: "CANCEL",
        payload: listId
    }
}
function reduser(state = initialStore, action) {

    switch (action.type) {
        case "NEW_TASK":
            const UpDB_new = state.DBData.map(task => {
                if (task.id == action.payload.listId) {
                    task.store.push({ text: action.payload.text, id: task.store.length != 0 ? task.store[task.store.length - 1].id + 1 : 0, done: false })
                    return task
                }
                else { return task }
            })
            return { DBData: UpDB_new }

        case "REMOVE_TASK":
            const UpDB_rem = state.DBData.map(task => {
                if (task.id == action.payload.listId) {
                    return { ...task, store: task.store.filter(item => item.id != action.payload.id) }
                }
                else { return task }
            })
            return { DBData: UpDB_rem }

        case "DONE_TASK":
            const UpDB_done = state.DBData.map(task => {
                if (task.id == action.payload.listId) {
                    return {
                        ...task, store: task.store.map(tsk => {
                            if (tsk.id == action.payload.id) {
                                return {
                                    ...tsk,
                                    done: !tsk.done
                                }
                            }
                            else { return tsk }
                        })
                    }
                }
                else { return task }
            })
            return { DBData: UpDB_done }
        case "EDIT_TASK":
            const UpDB_edit = state.DBData.map(task => {
                if (task.id == action.payload.listId) {
                    return {
                        ...task, store: task.store.map(tsk => {
                            if (tsk.id == action.payload.task.id) {
                                return {
                                    ...tsk,
                                    text: action.payload.task.text
                                }
                            }
                            else { return tsk }
                        })
                    }
                }
                else { return task }
            })
            return { DBData: UpDB_edit }
        case "NEW_LIST":
            const UpDB_NL =state.DBData.map(task => { return task })
            UpDB_NL.push({ header: action.payload, id: state.DBData.length != 0 ? state.DBData[state.DBData.length - 1].id + 1 : 0, store: [], color: "white" })
            return { DBData: UpDB_NL }
        case "REMOVE_LIST":
            const UpDB_RL = state.DBData.filter(item => item.id != action.payload)
            return { DBData: UpDB_RL }
        case "CANCEL":
            const UpDB_cancel = state.DBData.map(task => {
                if (task.id == action.payload) {
                    return { ...task, store: JSON.parse(localStorage.getItem(action.payload)) }
                }
                else { return task }
            })
            return { DBData: UpDB_cancel }
        default:
            return state
    }
}
const taskStore = createStore(reduser)
export default taskStore