import React, { FC, SetStateAction } from 'react';
import Cell from '../../models/Cell';

interface ICellComponentProps {
  cell: Cell;
  selected: boolean;
  setSelectedCell: React.Dispatch<SetStateAction<Cell | null>>
}

const CellComponent: FC <ICellComponentProps> = ({ cell, selected, setSelectedCell }) => {
  console.log(cell);
  return (
    <button
      type="submit"
      onClick={() => setSelectedCell(cell)}
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
    >
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </button>
  );
};

export default CellComponent;
