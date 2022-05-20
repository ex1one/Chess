import React, { useEffect, useState } from 'react';
import BoardComponent from './components/Board/BoardComponent';
import Board from './models/Board';
import './styles/index.scss';
import { Player } from './models/Player';
import Colors from './models/Colors';

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <BoardComponent
        currentPlayer={currentPlayer}
        changePlayer={changePlayer}
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
};

export default App;
