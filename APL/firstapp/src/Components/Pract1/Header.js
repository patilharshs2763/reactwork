// src/components/Header.js
import React from 'react';
import styles from '../Pract1/Styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Sports Shop</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
