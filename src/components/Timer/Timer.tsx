import React, { FC, useState } from 'react';
import { Player } from '../../models/Player';

interface ITimerProps {
  currentPlayer: Player;
  restart: () => void;
}

const Timer: FC <ITimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  return (
    <div>
      <button
        onClick={restart}
        type="submit"
      >
        Перезапустить игру
      </button>
      <h2>
        Черные -
        {blackTime}
      </h2>
      <h2>
        Белые -
        {whiteTime}
      </h2>
    </div>
  );
};

export default Timer;
