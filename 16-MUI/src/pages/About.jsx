import React from 'react';
import {
    Container,
    Paper,
    Typography,
    Box
} from '@mui/material';

export default function About() {
    return (
        <Container maxWidth="md" sx={{ py: 8 }}>

            <Paper
                elevation={3}
                sx={{
                    p: 5,
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
                    About Us
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    color="black"
                    sx={{ color: '#000' }}
                >
                    Welcome to our website! We are dedicated to providing
                    high-quality products and services to our customers.
                </Typography>

                <Box>
                    <Typography
                        variant="h5"
                        component="h2"
                        fontWeight="bold"
                        sx={{ color: '#000' }}
                        gutterBottom
                    >
                        Our Mission
                    </Typography>

                    <Typography variant="body1" color="black">
                        Our mission is to create a simple, reliable, and
                        user-friendly experience for everyone. We focus on
                        quality, innovation, and customer satisfaction.
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        variant="h5"
                        component="h2"
                        fontWeight="bold"
                        sx={{ color: '#000' }}
                        gutterBottom
                    >
                        Why Choose Us?
                    </Typography>

                    <Typography variant="body1" >
                        We believe in providing excellent service, quality
                        products, and a smooth user experience. Our goal is
                        to continuously improve and build a strong relationship
                        with our customers.
                    </Typography>
                </Box>

            </Paper>

        </Container>
    );
}