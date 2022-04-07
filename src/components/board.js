import React, { useState, useEffect } from 'react';
import images from '../assets/images.js';
import Card from './cards.js';
import './game.css'

export default function Board() {
    
    const [counter, setCounter] = useState(0); //contador de acciones
    const [cards, setCards] = useState([]); //Primera fila
    const [compareCard, setCompareCard] = useState(null);

    useEffect(() => {
            let counter = document.getElementById('counter');
            counter.innerHTML = `Movimientos realizados: ${counter/2}`
        }
    );
    

    function randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //Inicializa el juego con un orden aleatorio
    function initGame () {
        let set1 = images;  //Primera mitad de cartas
        let set2 = images;  //Segunda mitad de cartas
        let newCardSet = [];
        for (let i = 0; i < images.length; i++) {
            let x = randomInt(set1.length);
            let y = randomInt(set2.length);
            
            let img1 = set1.splice(x,1)[0];
            newCardSet.push(img1);

            let img2 = set2.splice(y,1)[0];
            newCardSet.push(img2);
        }
        setCards([...newCardSet]);  //Cartas de juego
    }

    //Actualiza el contador de movimientos
    function updateCounter() {
        let updateCounter = counter;
        updateCounter += 1;
        setCounter(updateCounter);
    }
    
    return (
        <>
            <h1>Juego de Memoria</h1>
            <h2 id='counter'></h2>
            <div>
                <button onClick={initGame}>Iniciar el juego</button>
            </div>

            <form className='gameGrid'>
                {
                    cards.map(card => {
                        return(<Card img={card}/>)
                    })
                }
            </form>
        </>
    );


}