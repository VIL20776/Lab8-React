import React, { useState, useEffect } from 'react';
import images from '../assets/front.js';
import Card from './cards.js';
import './game.css'

export default function Board() {
    
    const [counter, setCounter] = useState(0); //contador de acciones
    const [cards, setCards] = useState([]); //cartas de juego
    const [foundPairs, setFoundPairs] = useState([]); //Pares encontrados
    const [foundCard, setFoundCard] = useState(null);   //Carta a comparar
    const [foundIds, setFoundIds] = useState([]);   //Ids de cartas selecionadas

    //Inicializar el juego
    useEffect(
        () => {initGame()},
        []    
    );
    

    function randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //Inicializa el juego con un orden aleatorio
    function initGame () {
        setCounter(0);
        setFoundPairs([]);
        setFoundCard(null);
        setFoundIds([]);

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

    function updateCounter() {
        setCounter(counter + 1);
    }

    function comparator(img) {
        //Si hay coincidencia, se ingresa al array de comparacion
        if (foundCard == img) {
            let newPair = foundPairs;
            newPair.push(img);
            setFoundPairs([...newPair])
        }

        if (foundIds.length == 2) {
            setTimeout( () => {
                setFoundCard(null);
                setFoundIds([]);
            }, 800);
        }
    }

    function setCompareCard (id, img) {
        //Si no se ha comparado antes, se agrega al array de comparacion
        if (!foundIds.includes(id)) {
            let newId = foundIds;
            newId.push(id);
            setFoundIds([...newId]);

            if(foundCard == null){
                setFoundCard(img);
            }
        }
    
    }
    
    
    return (
        <>
            <h1>Juego de Memoria</h1>
            <h2>Movimientos realizados: {Math.floor(counter/2)}</h2>
            <div>
                <button onClick={initGame}>Nuevo juego</button>
            </div>
            <div>
                {foundPairs.length == images.length && <h3>Has completado el juego</h3>}
            </div>

            <form className='gameGrid'>
                {
                    cards.map((card, index) => {
                        return(<Card 
                            id={index}
                            img={card}
                            updateCounter={updateCounter}
                            keepFlipped={foundPairs.includes(card)}
                            isComparing={foundIds.includes(index)}
                            setCompareCard={setCompareCard}
                            comparator={comparator}/>)
                    })
                }
            </form>
        </>
    );


}