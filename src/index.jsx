import React from 'react';
import { createRoot } from 'react-dom/client';
import Board from './components/board.jsx';

const root = createRoot(document.getElementById('board'));
root.render(<Board />);
