import React from 'react';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box
} from '@mui/material';

export default function Contact() {
    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>

            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}
            >

                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    fontWeight="bold"
                    sx={{ color: '#000' }}
                >
                    Contact Us
                </Typography>

                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}
                >

                    <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        required
                    />

                    <TextField
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                    />

                    <TextField
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ mt: 2 }}
                    >
                        Send Message
                    </Button>

                </Box>

            </Paper>

        </Container>
    );
}