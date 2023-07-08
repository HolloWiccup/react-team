import {TodoContext} from "./task-context.ts";
import {FC, ReactNode, useEffect, useReducer} from "react";
import {tasksReducer} from "./task-context.ts";
import {taskStorage} from "../helpers/task-storage.ts";

type TasksProviderProps = {
  children: ReactNode
}
const initTasks = taskStorage.get()
const TodoProvider: FC<TasksProviderProps> = ({children}) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initTasks)
  useEffect(()=>{
    taskStorage.set(tasks)
  }, [tasks])
  return (
    <TodoContext.Provider value={{tasks, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider