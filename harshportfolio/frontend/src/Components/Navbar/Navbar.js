import React from 'react';
import './NavStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Import the bars icon
// import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'; // Import the bars icon
import { NavLink } from 'react-router-dom';
// import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const Navbar = () => {
    const items = [
        {
            key: '2',
            label: <NavLink to="/signup" className="harsh-signUp">Sign Up</NavLink>,
            extra: <FontAwesomeIcon icon={faUserPlus} className='harsh-drawer-signup' />,
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: <NavLink to="/login" className="harsh-signUp">Sign In</NavLink>,
            extra: <FontAwesomeIcon icon={faRightToBracket} className='harsh-drawer-signup' />,
        },

    ];
    return (
        <div>
            <nav className="navbar active navbar-expand-lg bg-transparent harsh-navbar-style">
                <div className="container-fluid mx-lg-5 harsh-navbar">
                    <NavLink className="navbar-brand harsh-navbrand" to="/">Harsh</NavLink>
                    {/* toggle button  */}
                    <button className="navbar-toggler shadow-none border-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        {/* <span className="navbar-toggler-icon harsh-toggleBtn"></span> */}
                        <FontAwesomeIcon icon={faBars} className='harsh-toggleBtn' />
                    </button>
                    <div className="sideBar offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header border-bottom">
                            <h5 className="offcanvas-title " id="offcanvasWithBothOptionsLabel">Check out</h5>
                            <button type="button" className="btn-close btn-close-white shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body p-4 p-lg-0">
                            <ul className="navbar-nav  align-items-center flex-grow-1 pe-3 harsh-navbar-ul">
                                <li className="nav-item">
                                    <NavLink
                                        exact
                                        className={({ isActive }) => isActive ? "nav-link custNavBtn custNavBtn-active hvr-underline-from-center" : "nav-link custNavBtn"}
                                        aria-current="page"
                                        to="/"
                                    >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        exact
                                        className={({ isActive }) => isActive ? "nav-link custNavBtn custNavBtn-active hvr-underline-from-center" : "nav-link custNavBtn hvr-underline-from-center"}
                                        to="/about"
                                    >About me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        exact
                                        className={({ isActive }) => isActive ? "nav-link custNavBtn custNavBtn-active hvr-underline-from-center" : "nav-link custNavBtn hvr-underline-from-center"}
                                        to="/portfolio"
                                    >Portfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        exact
                                        className={({ isActive }) => isActive ? "nav-link custNavBtn custNavBtn-active hvr-underline-from-center" : "nav-link custNavBtn hvr-underline-from-center"}
                                        to="/contact"
                                    >Contact</NavLink>
                                </li>
                            </ul>

                            <div class="d-flex justify-content-center align-items-center dropdown harsh-dropdownmenu ">

                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    className='harshvardhan'
                                >
                                    <a className='harsh-navAcc'>
                                        <Space>
                                            Connect
                                            <UserOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
