import React, { useState, useEffect } from 'react';
import images from '../assets/front';
import Card from './cards';
import './game.css';

export default function Board() {
  const [counter, setCounter] = useState(0); // contador de acciones
  const [cards, setCards] = useState([]); // cartas de juego
  const [foundPairs, setFoundPairs] = useState([]); // Pares encontrados
  const [foundCard, setFoundCard] = useState(null); // Carta a comparar
  const [foundIds, setFoundIds] = useState([]); // Ids de cartas selecionadas

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Inicializa el juego con un orden aleatorio
  function initGame() {
    setCounter(0);
    setFoundPairs([]);
    setFoundCard(null);
    setFoundIds([]);

    const set1 = [...images]; // Primera mitad de cartas
    const set2 = [...images]; // Segunda mitad de cartas
    const newCardSet = [];
    for (let i = 0; i < images.length; i += 1) {
      const x = randomInt(set1.length);
      const y = randomInt(set2.length);

      const img1 = set1.splice(x, 1)[0];
      newCardSet.push(img1);

      const img2 = set2.splice(y, 1)[0];
      newCardSet.push(img2);
    }
    setCards([...newCardSet]); // Cartas de juego
  }

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  const comparator = (img) => {
    // Si hay coincidencia, se ingresa al array de comparacion
    if (foundCard === img) {
      const newPair = foundPairs;
      newPair.push(img);
      setFoundPairs([...newPair]);
    }

    if (foundIds.length === 2) {
      setTimeout(() => {
        setFoundCard(null);
        setFoundIds([]);
      }, 800);
    }
  };

  const setCompareCard = (id, img) => {
    // Si no se ha comparado antes, se agrega al array de comparacion
    if (!foundIds.includes(id)) {
      const newId = foundIds;
      newId.push(id);
      setFoundIds([...newId]);

      if (foundCard == null) {
        setFoundCard(img);
      }
    }
  };

  // Inicializar el juego
  useEffect(() => {
    initGame();
  });

  return (
    <>
      <h1>Juego de Memoria</h1>
      <h2>
        Movimientos realizados:
        {Math.floor(counter / 2)}
      </h2>
      <div>
        <button type="button" onClick={initGame}>Nuevo juego</button>
      </div>
      <div>
        {foundPairs.length === images.length && <h3>Has completado el juego</h3>}
      </div>

      <form className="gameGrid">
        {
          cards.map((card, index) => (
            <Card
              id={index}
              img={card}
              updateCounter={updateCounter}
              keepFlipped={foundPairs.includes(card)}
              isComparing={foundIds.includes(index)}
              setCompareCard={setCompareCard}
              comparator={comparator}
            />
          ))
        }
      </form>
    </>
  );
}
