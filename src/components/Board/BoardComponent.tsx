import React, { FC } from 'react';
import CellComponent from '../Cell/CellComponent';
import Board from '../../models/Board';

interface IBoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC <IBoardComponentProps> = ({ board, setBoard }) => (
  <div className="board">
    {board.cells.map((row) => (
      row.map((cell) => (
        <CellComponent
          cell={cell}
          key={cell.id}
        />
      ))
    ))}
  </div>
);

export default BoardComponent;
