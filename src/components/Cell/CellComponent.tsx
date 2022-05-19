import React, { FC } from 'react';
import { Cell } from '../../models/Cell';

interface ICellComponentProps {
  cell: Cell
}

const CellComponent: FC <ICellComponentProps> = ({ cell }) => (
  <div className={['cell', cell.color].join(' ')} />
);

export default CellComponent;
