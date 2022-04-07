import React from 'react';
import ReactDom from 'react-dom';
import Board from './components/board.js';

ReactDom.render(
    <Board/>, 
    document.getElementById('board')
);