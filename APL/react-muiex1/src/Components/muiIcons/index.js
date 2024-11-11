// src/IconTable.js

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {
    Home as HomeIcon,
    Settings as SettingsIcon,
    Info as InfoIcon,
    Person as PersonIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    Lock as LockIcon,
    Favorite as FavoriteIcon,
    ShoppingCart as ShoppingCartIcon,
    Search as SearchIcon,
} from '@mui/icons-material';

const icons = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Settings', icon: <SettingsIcon /> },
    { name: 'Info', icon: <InfoIcon /> },
    { name: 'Person', icon: <PersonIcon /> },
    { name: 'Email', icon: <EmailIcon /> },
    { name: 'Phone', icon: <PhoneIcon /> },
    { name: 'Lock', icon: <LockIcon /> },
    { name: 'Favorite', icon: <FavoriteIcon /> },
    { name: 'Shopping Cart', icon: <ShoppingCartIcon /> },
    { name: 'Search', icon: <SearchIcon /> },
];

const IconTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="icon table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Icon</TableCell>
                        <TableCell align="center">Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {icons.map((icon, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{icon.icon}</TableCell>
                            <TableCell align="center">{icon.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default IconTable;
