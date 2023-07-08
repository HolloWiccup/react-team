import {FormControl, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {FormEvent, useContext, useState} from "react";
import {ACTIONS, TodoContext} from "../../context/task-context.ts";

const defaultValue = ''
const minLength = 2;

const TaskForm = () => {
    const [value, setValue] = useState(defaultValue)
    const {dispatch} = useContext(TodoContext)

    const isValid = value.trim().length > minLength
    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        if (!isValid) return
        dispatch({
            type: ACTIONS.ADD,
            payload: value
        })
        setValue(defaultValue);
    }

    return (
        <FormControl component='form' fullWidth onSubmit={handleSubmit}>
            <InputLabel htmlFor='input-task'>Имя новой задачи</InputLabel>
            <Input value={value} onChange={(e) => setValue(e.target.value)} id='input-task' endAdornment={
                <InputAdornment position="end">
                    <IconButton edge='end' disabled={!isValid} type='submit'>
                        <AddIcon/>
                    </IconButton>
                </InputAdornment>}
            />
        </FormControl>

    );
}

export default TaskForm