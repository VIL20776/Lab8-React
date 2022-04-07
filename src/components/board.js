import React, { useState, useEffect } from 'react';
import images from '../assets/images.js';
import Card from './cards.js';

export default function Board() {
    
    const [counter, setCounter] = useState(0); //contador de acciones
    const [cards, setCards] = useState([]); //Array de cartas
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
        let newCardSet = cards;
        for (let i = 0; i < images.length; i++) {
            x = randomInt(set1.length);
            y = randomInt(set2.length);
            
            let img1 = set1.splice(x,1)[0];
            newCardSet.push(
                <Card 
                    img = {img1} 
                    updateCounter={updateCounter}
                />
            );

            let img2 = set2.splice(y,1)[0];
            newCardSet.push(
                <Card 
                    img = {img2} 
                    updateCounter={updateCounter}
                />
            );
        }
        setCards([...newCardSet]);  //Cartas de juego
    }

    //Agrega una carta al tablero
    function createCard () {
        if (cards.length == 0) return <Card/>

        let updateCards = cards;
        let card = updateCards.shift();
        setCards([...updateCards]);
        return card;
    }

    //Actualiza el contador de movimientos
    function updateCounter() {
        let updateCounter = counter;
        updateCounter = Math.floor(updateCounter + 1);
        setCounter(updateCounter);
    }
    
    return (
        <>
            <h1>Juego de Memoria</h1>
            <h2 id='counter'></h2>
            <div>
                <button onClick={initGame}>Iniciar el juego</button>
            </div>

            <form>
                <div className='row'>
                    {createCard()}
                    {createCard()}
                    {createCard()}
                    {createCard()}
                </div>
                <div className='row'>
                    {createCard()}
                    {createCard()}
                    {createCard()}
                    {createCard()}
                </div>
                <div className='row'>
                    {createCard()}
                    {createCard()}
                    {createCard()}
                    {createCard()}
                </div>
                <div className='row'>
                    {createCard()}
                    {createCard()}
                    {createCard()}
                    {createCard()}
                </div>
            </form>
        </>
    );


}