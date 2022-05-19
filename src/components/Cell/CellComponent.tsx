import React, { FC } from 'react';
import Cell from '../../models/Cell';

interface ICellComponentProps {
  cell: Cell
}

const CellComponent: FC <ICellComponentProps> = ({ cell }) => (
  <div className={['cell', cell.color].join(' ')}>
    {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
  </div>
);

export default CellComponent;
