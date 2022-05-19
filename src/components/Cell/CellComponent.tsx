import React, { FC, SetStateAction } from 'react';
import Cell from '../../models/Cell';

interface ICellComponentProps {
  cell: Cell;
  selected: boolean;
  setSelectedCell: React.Dispatch<SetStateAction<Cell | null>>
}

const CellComponent: FC <ICellComponentProps> = ({ cell, selected, setSelectedCell }) => {
  const changeClick = (selectedCell: Cell) => {
    if (cell.figure) {
      setSelectedCell(selectedCell);
    }
  };

  return (
    <button
      type="submit"
      onClick={() => changeClick(cell)}
      className={['cell', cell.color, selected ? 'selected' : '', cell.available && cell.figure && 'attack'].join(' ')}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </button>
  );
};

export default CellComponent;
