import React, { useState } from 'react';
import ImageCard from './ImageCard';
import '../css/ImageSlider.css';

const ImageSlider = ({ images, imageCardSelected, onClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState('none'); // none, shrinking, growing


    const visibleImages = images.slice(currentIndex, currentIndex + 4);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setTransitionDirection('shrinking');
            setTimeout(() => {
                setTransitionDirection('none');
                setCurrentIndex(currentIndex - 4);
                setTransitionDirection('growing');
                setTimeout(() => {
                    setTransitionDirection('none');
                }, 500);
            }, 500);
            

        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 4) {
            setTransitionDirection('shrinking');
            setTimeout(() => {
                setTransitionDirection('none');
                setCurrentIndex(currentIndex + 4);
                setTransitionDirection('growing');
                setTimeout(() => {
                    setTransitionDirection('none');
                }, 500);
            }, 500);
        }
    };


    return (
        <div className="slider-container">
            <button  className='img-s-button' onClick={handlePrev}>
                <img src="/img/leftArrow.png" alt="&lt;" style={{ display: currentIndex === 0 ? 'none' : 'block' }} />
            </button>
            <div className="slider">
                {visibleImages.map((img, index) => (
                    <ImageCard 
                        key={index} 
                        src={img}
                        className={`${transitionDirection} ${imageCardSelected === img ? 'selected' : ''}`}
                        onClick={() => onClick(img)}
                    />
                ))}
            </div>
            <button className='img-s-button' onClick={handleNext}>
                <img src="/img/rightArrow.png" alt="&gt;" style={{ display: currentIndex >= images.length - 4 ? 'none' : 'block' }} />
            </button>
        </div>
    );
};

export default ImageSlider;
