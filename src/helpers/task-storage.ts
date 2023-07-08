import {ITask} from "../components/task-list/TaskList.tsx";

interface ITaskStorage {
    key: string;
    get: () => ITask[];
    set: (tasks: ITask[]) => void
}

export const taskStorage: ITaskStorage = {
    key: 'tasks',
    get(): ITask[]{
        const tasks = localStorage.getItem(this.key);
        return (tasks) ? JSON.parse(tasks) as ITask[] : []
    },
    set(tasks){
        localStorage.setItem(this.key, JSON.stringify(tasks))
    }
}