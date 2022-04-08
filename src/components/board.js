import React, { useState, useEffect } from 'react';
import images from '../assets/front.js';
import Card from './cards.js';
import './game.css'

export default function Board() {
    
    const [counter, setCounter] = useState(0); //contador de acciones
    const [cards, setCards] = useState([]); //cartas de juego
    const [compareCard, setCompareCard] = useState([]); //Cartas comparadas
    const [comparing, setComparing] = useState(false);  //Si se esta comparando

    //Actualiza el contador
    useEffect(() => {
            //initGame();
            let count = document.getElementById('counter');
            count.innerHTML = `Movimientos realizados: ${Math.floor(counter/2)}`;
        }
    );
    

    function randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //Inicializa el juego con un orden aleatorio
    function initGame () {
        let set1 = [...images];  //Primera mitad de cartas
        let set2 = [...images];  //Segunda mitad de cartas
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

    function comparator(img) {
        //Si no hay coincidencia, se elimina del array de comparacion
        if (compareCard[compareCard.lenght-1] != img && comparing) {
            let newCompare = compareCard;
            newCompare.pop();
            setCompareCard([...newCompare])
            setComparing(false); //Salir modo de comparacion
            return false;
        }

        //Si no se ha comparado antes, se agrega al array de comparacion
        if (!compareCard.includes(img) && !comparing) {
            let newCompare = compareCard;
            newCompare.push(img);
            setCompareCard([...newCompare]);
            setComparing(true); //Entrar modo de comparacion
            return true;
        }

        setComparing(false);
        return true;
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
                        return(<Card 
                            img={card}
                            counter={counter}
                            setCounter={setCounter}
                            keepFlipped={compareCard.includes(card)}
                            comparator={comparator}/>)
                    })
                }
            </form>
        </>
    );


}