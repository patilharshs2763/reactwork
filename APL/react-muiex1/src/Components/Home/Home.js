import React from 'react'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Home = () => {
    return (
        <div>
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        xs-8
                    </Grid>
                    <Grid item xs={4}>
                        xs-4
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
