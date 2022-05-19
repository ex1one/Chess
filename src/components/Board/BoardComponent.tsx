import React, { FC, useState } from 'react';
import CellComponent from '../Cell/CellComponent';
import Board from '../../models/Board';
import Cell from '../../models/Cell';

interface IBoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC <IBoardComponentProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  return (
    <div className="board">
      {board.cells.map((row) => (
        row.map((cell) => (
          <CellComponent
            setSelectedCell={setSelectedCell}
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
