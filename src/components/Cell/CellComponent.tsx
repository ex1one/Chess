import React, { FC, SetStateAction } from 'react';
import Cell from '../../models/Cell';
import { Player } from '../../models/Player';

interface ICellComponentProps {
  cell: Cell;
  selected: boolean;
  setSelectedCell: React.Dispatch<SetStateAction<Cell | null>>
  selectedCell: Cell | null;
  currentPlayer: Player | null;
  changePlayer: () => void;
}

const CellComponent: FC <ICellComponentProps> = ({
  cell, selected, setSelectedCell, selectedCell, currentPlayer, changePlayer,
}) => {
  const changeClick = (activeCell: Cell) => {
    if (selectedCell && selectedCell !== activeCell && selectedCell.figure?.canMove(activeCell)) {
      selectedCell.moveFigure(activeCell);
      changePlayer();
      setSelectedCell(null);
    } else if (activeCell.figure && cell.figure?.color === currentPlayer?.color) {
      setSelectedCell(activeCell);
    }
  };

  return (
    <button
      type="submit"
      onClick={() => changeClick(cell)}
      className={['cell', cell.color, selected && 'selected', cell.available && cell.figure && 'attack'].join(' ')}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </button>
  );
};

export default CellComponent;
