// ImageCard.js
import React from 'react';
import '../css/ImageCard.css';

const ImageCard = ({ src, className, onClick }) => {
    return (
        <div className="image-card" onClick={onClick}>
            <img className={className} src={src} alt="Slide" />
        </div>
    );
};

export default ImageCard;
