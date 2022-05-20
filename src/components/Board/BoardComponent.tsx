import React, { FC, useEffect, useState } from 'react';
import CellComponent from '../Cell/CellComponent';
import Board from '../../models/Board';
import Cell from '../../models/Cell';

interface IBoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC <IBoardComponentProps> = ({ board, setBoard }) => {
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
    <div className="board">
      {board.cells.map((row) => (
        row.map((cell) => (
          <CellComponent
            setSelectedCell={setSelectedCell}
            selectedCell={selectedCell}
            cell={cell}
            key={cell.id}
            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
          />
        ))
      ))}
    </div>
  );
};

export default BoardComponent;
