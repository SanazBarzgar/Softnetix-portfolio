import React from 'react';
import { useState } from 'react';
const Carousel = ({ items }) => {
    const [currentItem, setCurrentItem] = useState(0);


    const prevItem = () => {
        setCurrentItem((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
    };
    const nextItem = () => {
        setCurrentItem((currentItem) => (currentItem + 1) % items.length);
    };

    return (
        <div className="w-100 rounded d-flex flex-column align-items-center justify-content-center ">
                <img src={items[currentItem].imageUrl}
                className='w-75 h-75 rounded-pill' />
                <h3 className='text-light m-3'>{items[currentItem].client}</h3>
                <p className='text-light m-3'>{items[currentItem].message}</p>
            
            <div className='m-3'>
            <button
                className='btn btn-dark m-2'
                onClick={prevItem}>prev</button>
            <button
                className='btn btn-dark m-2' 
                onClick={nextItem}>Next</button>
            </div>
        </div> 

    );
}

export default Carousel

