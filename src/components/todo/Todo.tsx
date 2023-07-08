import {Paper, Typography} from "@mui/material";
import TaskList from "../task-list/TaskList.tsx";
import TaskForm from "../task-form/TaskForm.tsx";

const Todo = () => {
    return (
        <Paper sx={{padding: '20px', minWidth: '300px', maxWidth: '400px'}}>
            <Typography variant='h3'>'Todo'</Typography>
            <TaskForm />
            <TaskList/>
        </Paper>
    );
}

export default Todo