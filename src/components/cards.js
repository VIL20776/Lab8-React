import React, {useState,useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';
import back from '../assets/back/ShinMegamiTenseiLogo.webp';
//import './cards.css';

export default function Card ({img, counter, setCounter, keepFlipped, comparator}) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
            if (isFlipped) setIsFlipped(keepFlipped);
        }
    );
    

    function handleClick(e) {
        e.preventDefault();
        if (!isFlipped) {
            setCounter(counter + 1);
            setIsFlipped(!isFlipped);
            setInterval(
                setIsFlipped(comparator(img)),
                1000
            )
            
        }
    }

    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
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