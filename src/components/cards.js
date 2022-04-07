import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
//import './cards.css';

export default function Card ({img, updateCounter}) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        if (!isFlipped) {
            //updateCounter();
            setIsFlipped(!isFlipped);
        }
    }

    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div>
                    <button onClick={handleClick}>
                        <img src={img}/>
                    </button>
                </div>

                <div>
                    <button onClick={handleClick}>
                        <img src={img}/>
                    </button>
                </div>
            </ReactCardFlip>
            
        </>
    )
}