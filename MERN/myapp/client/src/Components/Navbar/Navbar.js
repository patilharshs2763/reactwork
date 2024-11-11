import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Navbar = () => {
    const { isLoggedIn } = useAuth(); // Fetch LogoutUser function from context

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <span className='dypcet-clg'>Harsh </span>
                        <span className='dypcet-club'>Tech</span>
                    </NavLink>
                    <button className="navbar-toggler border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-top h-45" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Harsh Tech</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body custom-offcanva">
                            <ul className="navbar-nav justify-content-center align-items-start flex-grow-1 ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link cust-navkink" activeClassName="active" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link cust-navkink" activeClassName="active" to="/aboutus">About us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link cust-navkink" activeClassName="active" to="/contact">Contact</NavLink>
                                </li>

                                {isLoggedIn ? (
                                    <li className="nav-item">
                                        <NavLink className="nav-link cust-navkink" activeClassName="active" to="/logout" >Logout</NavLink>
                                    </li>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link cust-navkink" activeClassName="active" to="/register">Register</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link cust-navkink" activeClassName="active" to="/login">Login</NavLink>
                                        </li>
                                    </>
                                )}

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
