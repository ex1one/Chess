import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import { Player } from '../../models/Player';
import Colors from '../../models/Colors';

interface ITimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC <ITimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const decrementBlackPlayer = () => {
    setBlackTime((prev) => prev - 1);
  };

  const decrementWhitePlayer = () => {
    setWhiteTime((prev) => prev - 1);
  };

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhitePlayer : decrementBlackPlayer;
    timer.current = setInterval(callback, 1000);
  };

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  };

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  return (
    <div>
      <button
        onClick={handleRestart}
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
