import React, { FC } from 'react';
import Figure from '../../models/figures/Figure';

interface ILostFiguresProps {
  title: string;
  figures: Figure[]
}

const LostFigures: FC <ILostFiguresProps> = ({ title, figures }) => (
  <div className="lost">
    <h3>{title}</h3>
    {figures.map((figure) => (
      <div key={figure.id}>
        {figure.name}
        {figure.logo && <img src={figure.logo} alt="" />}
      </div>
    ))}

  </div>
);

export default LostFigures;
