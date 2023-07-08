import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

import {Checkbox, IconButton, Input, InputAdornment, ListItem, ListItemText} from "@mui/material";
import {useContext, useState} from "react";
import {ACTIONS, TodoContext} from "../../context/task-context.ts";

interface TaskProps {
    id: number;
    text: string;
    done: boolean;
    editable?: boolean;
}

const Task = ({id, text, done}: TaskProps) => {
    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(text)
    const {dispatch} = useContext(TodoContext)

    const handleDeleteClick = () => {
        dispatch({
            type: ACTIONS.DELETE,
            payload: id
        })
    }
    const handleEditClick = () => {
        setIsEdit(true)
    }
    const handleSaveChangeClick = () => {
        dispatch({
            type: ACTIONS.EDIT,
            payload: {
                id, text: value, done
            }
        })
        setIsEdit(false)
    }

    const handleToggle = () => {
        dispatch({
            type: ACTIONS.TOGGLE,
            payload: id
        })
    }

    return (
        <>
            {!isEdit ?
                <ListItem key={id} disablePadding>
                    <Checkbox onChange={handleToggle} checked={done} disableRipple edge='start'/>
                    <ListItemText>{text}</ListItemText>
                    {!done && <IconButton sx={{color: 'blue'}} onClick={handleEditClick} edge="end">
                        <EditIcon/>
                    </IconButton>}
                    <IconButton sx={{color: 'orange'}} onClick={handleDeleteClick} edge="end">
                        <DeleteIcon/>
                    </IconButton>
                </ListItem> :
                <ListItem key={id} disablePadding>
                    <Input endAdornment={
                        <InputAdornment position="end">
                            <IconButton sx={{color: 'green'}} onClick={handleSaveChangeClick} edge="end">
                                <DoneIcon/>
                            </IconButton>
                        </InputAdornment>}
                           fullWidth value={value} onChange={(e) => setValue(e.target.value)}/>
                </ListItem>
            }
        </>
    );
}

export default Task