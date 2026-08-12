import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MUI
                </Typography>
                <Box>
                    
                    <Button color="inherit" component={RouterLink} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/contact">
                       Contact
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/about">
                        AboutUs
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
