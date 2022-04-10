import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import back from '../assets/back/ShinMegamiTenseiLogo.webp';
//import './cards.css';

export default function Card (
    {
        //Props
        id, 
        img, 
        updateCounter, 
        keepFlipped, 
        isComparing, 
        comparator, 
        setCompareCard
    }) {

    function handleClick(e) {
        e.preventDefault();
        if (!isComparing || !keepFlipped) {
            updateCounter();
            setCompareCard(id, img)
            comparator(img);
        }
    }

    return (
        <>
            <ReactCardFlip isFlipped={keepFlipped || isComparing} flipDirection="vertical">
                <div>
                    <button onClick={handleClick} className='card'>
                        <img src={back}/>
                    </button>
                </div>

                <div>
                    <button onClick={handleClick} className='card'>
                        <img src={img}/>
                    </button>
                </div>
            </ReactCardFlip>
            
        </>
    )
}