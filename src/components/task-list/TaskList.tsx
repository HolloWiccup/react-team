import {List, Typography} from "@mui/material";
import Task from "../task/Task.tsx";
import {useContext} from "react";
import {TodoContext} from "../../context/task-context.ts";

export interface ITask {
    id: number,
    text: string,
    done: boolean;
}

const TaskList = () => {
    const {tasks} = useContext(TodoContext)
    const planed = tasks.filter(task => !task.done
    ).reverse();
    const completed = tasks.filter(task => task.done
    );

    return (
        <>
            {(planed.length > 0) &&
                (<List sx={{textAlign: 'center'}}>
                    <Typography>{`Planed(${planed.length})`}</Typography>
                    {planed.map(task =>
                        <Task id={task.id} done={task.done} text={task.text} key={task.id}/>)}
                </List>)}
            {(completed.length > 0) &&
                (<List sx={{textAlign: 'center'}}>
                    <Typography>{`Completed(${completed.length})`}</Typography>
                    {completed.map(task =>
                        <Task id={task.id} done={task.done} text={task.text} key={task.id}/>)}
                </List>)}
        </>

    )
}

export default TaskList