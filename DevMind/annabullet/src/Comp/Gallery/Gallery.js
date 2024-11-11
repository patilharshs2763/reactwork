import React from 'react';
import './Gallery.css';
import { ImageGallery } from 'react-image-grid-gallery';
import { imagesArray } from './Images';

const Gallery = () => {
    return (
        <div>
            <div className='container'>
                <h1>Gallery</h1>
                <div className='customImageGallery'>
                    <ImageGallery
                        imagesInfoArray={imagesArray}
                        columnWidth={230}
                        gapSize={24}
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
