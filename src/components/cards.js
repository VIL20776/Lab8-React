import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Card ({img, updateCounter}) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        if (!isFlipped) {
            updateCounter();
            setIsFlipped(!isFlipped);
        }
    }

    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
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