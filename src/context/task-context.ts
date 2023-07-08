import {createContext, Dispatch, Reducer} from "react";
import {ITask} from "../components/task-list/TaskList.tsx";

const TodoContext = createContext<{
    tasks: ITask[],
    dispatch: Dispatch<any>
}>({
    tasks: [],
    dispatch: () => null
})

enum ACTIONS {
    ADD = 'ADD',
    EDIT = 'EDIT',
    DELETE = 'DELETE',
    TOGGLE = 'TOGGLE'
}

type ActionsById = {
    type: ACTIONS.TOGGLE | ACTIONS.DELETE,
    payload: number
}

type AddAction = {
    type: ACTIONS.ADD,
    payload: string
}
type EditAction = {
    type: ACTIONS.EDIT,
    payload: ITask
}

type Actions = ActionsById | AddAction | EditAction


let nextId = 1;
const tasksReducer: Reducer<ITask[], Actions> = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            return [...state, {
                id: nextId++,
                text: action.payload,
                done: false
            }]
        case ACTIONS.TOGGLE:
            return state.map(task => task.id === action.payload ? {...task, done: !task.done} : task)
        case ACTIONS.DELETE:
            return state.filter(task => task.id !== action.payload)
        case ACTIONS.EDIT:
            return state.map(task => task.id === action.payload.id ? action.payload : task)
        default:
            return state
    }
}

export {tasksReducer, TodoContext, ACTIONS}