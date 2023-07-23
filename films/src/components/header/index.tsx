import * as React from 'react';
import {Box, Button, Typography, Modal, TextField} from '@mui/material'
import './style.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthDispatch } from '../../context/userContext';
import { AUTH_TYPES } from '../../reducer/types';
import { dataUser} from '../../utils/defaultValues'
import Cookies from 'js-cookie';
import { API } from '../../utils/defaultValues';

export default function Header(): JSX.Element {
    const [open, setOpen] = React.useState<boolean>(false);
    const [isSent, setIsSent] = React.useState<boolean>(false);
    const authDispatch = React.useContext(AuthDispatch);
    const isUserAuthenticated = !!Cookies.get('token');
    const token = Cookies.get('token')

    const handleSend = () => setIsSent(true)
    const closeSend = () => {
        setIsSent(false); 
        setOpen(false)
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    React.useEffect(()=> {
        if(token) {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };
        
                fetch(API.USER_ID, options)
                .then(res => res.json())
                .then(json => {
                    Cookies.set('user_id', json.id, { expires: 365 })
                    authDispatch({type: AUTH_TYPES.SET_USER_ID, payload: Cookies.get('user_id')})
                })
                .catch(err => console.error('error:' + err));
        }
    }, [])

    function handleAuth() {
        setIsSent(false);
        setOpen(false);
        authDispatch(
            {type: AUTH_TYPES.SET_AUTH, payload: Cookies.set('token', dataUser.token, { expires: 365 })}
        )
    }

    return (
        <header>
            <div className="container">
                <div className="header-block">
                    <Link to='/'><p className="header-logo">Home</p></Link>
                    <div>
                        <Button onClick={handleOpen} disabled={isUserAuthenticated}>
                            <AccountCircleIcon/>
                        </Button>
                        {!isSent ?  
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Request a token
                            </Typography>
                            <TextField
                                margin='dense'
                                required
                                id="outlined-required"
                                placeholder='Type your email'
                                fullWidth
                            />
                            <Button variant="text" onClick={handleSend}>Request</Button>
                            <Button variant="text" color='inherit' onClick={handleClose}>Close</Button>
                        </Box>
                        </Modal>
                    :
                        <Modal
                                open={isSent}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Type a token
                                    </Typography>
                                    <TextField
                                        margin='dense'
                                        required
                                        id="outlined-required"
                                        placeholder='Token'
                                        fullWidth
                                    />
                                    <Button variant="text" onClick={handleAuth}>Ok</Button>
                                    <Button variant="text" color='inherit' onClick={closeSend}>Back</Button>
                                </Box>
                        </Modal>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
