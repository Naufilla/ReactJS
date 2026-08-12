import { Typography, Container } from '@mui/material';

export default function Home() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>Welcome Home</Typography>
            <Typography variant="body1">This is the landing page of your MUI website.</Typography>
        </Container>
    );
}
