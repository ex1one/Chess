import React, { FC, useEffect, useState } from 'react';
import CellComponent from '../Cell/CellComponent';
import Board from '../../models/Board';
import Cell from '../../models/Cell';
import Player from '../../models/Player';

interface IBoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  changePlayer: () => void;
}

const BoardComponent: FC <IBoardComponentProps> = ({
  board, setBoard, currentPlayer, changePlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const highlightCells = () => {
    board.highlightCell(selectedCell);
    updateBoard();
  };

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div>
      <h3>
        Текущий игрок
        {currentPlayer?.color}
      </h3>
      <div className="board">
        {board.cells.map((row) => (
          row.map((cell) => (
            <CellComponent
              currentPlayer={currentPlayer}
              changePlayer={changePlayer}
              setSelectedCell={setSelectedCell}
              selectedCell={selectedCell}
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          ))
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
