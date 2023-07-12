import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const isAuth = false;

export default function MovieAppBar() {
    const loginColor = isAuth ? 'green' : 'red' ;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Movies
                    </Typography>
                    <IconButton sx={{color: loginColor}}>
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}