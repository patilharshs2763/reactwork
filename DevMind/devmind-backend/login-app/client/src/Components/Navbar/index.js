import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { SwipeableDrawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';  // Import for screen size detection
import { useTheme } from '@mui/material/styles';  // For theme detection

const pages = ['Products', 'About', 'Contact'];
const settings = ['Account', 'Dashboard', 'Logout'];

const demoSession = {
    user: {
        name: 'Harshvardhan Patil',
        email: 'harshpatil@outlook.com',
        image: 'https://avatars.githubusercontent.com/u/19550456',
    },
};

function Navbar() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));  // Detect if screen is md or larger
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleNavClick = (page) => {
        if (page === 'Products') navigate('/products');
        if (page === 'About') navigate('/about');
        if (page === 'Contact') navigate('/contact');
        handleCloseNavMenu();
        handleCloseUserMenu();
    };

    const handleSettingsClick = (setting) => {
        if (setting === 'Account') navigate('/profile');
        if (setting === 'Logout') navigate('/login-form');
        handleCloseUserMenu();
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            onClick={() => navigate('/home')}
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            LOGO
                        </Typography>

                        {/* Show the navigation buttons only on md and above */}
                        {isMdUp && (
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => handleNavClick(page)}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        )}

                        {/* Toggler on the right for xs and sm */}
                        {!isMdUp && (
                            <Box sx={{ flexGrow: 1 }}></Box>
                        )}
                        {/* Empty space to push toggler to the right */}
                        {/* Profile on the right for md and above */}
                        {isMdUp ? (
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={demoSession.user.name} src={demoSession.user.image} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem sx={{ pointerEvents: 'none' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar alt={demoSession.user.name} src={demoSession.user.image} sx={{ mr: 1 }} />
                                            <Box>
                                                <Typography textAlign="start" sx={{ fontWeight: 'bold' }}>
                                                    {demoSession.user.name}
                                                </Typography>
                                                <Typography textAlign="center">{demoSession.user.email}</Typography>
                                            </Box>
                                        </Box>
                                    </MenuItem>

                                    <hr />
                                    <MenuItem onClick={() => handleSettingsClick('Account')}>
                                        <Typography textAlign="center">Account</Typography>
                                    </MenuItem>
                                    {settings.slice(1).map((setting) => (
                                        <MenuItem key={setting} onClick={() => handleSettingsClick(setting)}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        ) : (
                            /* Toggler button for small screens */
                            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 0 }}>
                                <IconButton
                                    size="large"
                                    aria-label="open navigation"
                                    onClick={toggleDrawer(true)} // Open drawer on icon click
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        )}

                    </Toolbar>
                </Container>
            </AppBar>

            {/* Drawer for small devices */}
            <SwipeableDrawer
                anchor='left'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {/* Profile Section in Drawer for small screens */}
                    {!isMdUp && (
                        <MenuItem sx={{ pointerEvents: 'none' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar alt={demoSession.user.name} src={demoSession.user.image} sx={{ mr: 1 }} />
                                <Box>
                                    <Typography textAlign="start" sx={{ fontWeight: 'bold' }}>
                                        {demoSession.user.name}
                                    </Typography>
                                    <Typography textAlign="center">{demoSession.user.email}</Typography>
                                </Box>
                            </Box>
                        </MenuItem>
                    )}
                    <hr />
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={() => handleNavClick(page)}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}


                </Box>
            </SwipeableDrawer>


        </>
    );
}

export default Navbar;
