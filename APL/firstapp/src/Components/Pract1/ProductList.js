// src/components/ProductList.js
import React from 'react';
import styles from '../Pract1/Styles/ProductList.module.css';
import basketball from '../Pract1/assets/basketball.jpeg'
import bat from '../Pract1/assets/bat.png'



const ProductList = () => {
    return (
        <div className={styles.productList}>
            <div className={styles.productCard}>
                <img src={basketball} style={{ height: '200px', width: '200px' }} />
                <div className={styles.productDesc}>
                    <h3>Basketball</h3>
                    <h4>Rs.799</h4>
                </div>
            </div>
            <div className={styles.productCard}>
                <img src={bat} style={{ height: '200px', width: '200px' }} />
                <div className={styles.productDesc}>
                    <h3>Bat</h3>
                    <h4>Rs.1799</h4>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
