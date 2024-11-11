// src/components/ProductCard.js
import React from 'react';
import styles from '../Pract1/Styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
    // Importing the image dynamically
    const image = require(`../Pract1/assets/${product.img}`).default;

    return (
        <div className={styles.productCard}>
            <img src={image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
