import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Slider from './Slider';
export const Home = () => {
    return (
        <div>
            <Navbar />
            <Box sx={{ p: 2 }}>
                <Slider />
            </Box>
            <Box sx={{ p: 2 }}>
                Hello Harsh
            </Box>
        </div>
    )
}
