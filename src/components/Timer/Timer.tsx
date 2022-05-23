import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import Player from '../../models/Player';
import Colors from '../../models/Colors';
import Modal from '../Modal/Modal';
import styles from './timer.module.scss';

interface ITimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC <ITimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState<number>(300);
  const [whiteTime, setWhiteTime] = useState<number>(300);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [open, setOpen] = useState<boolean>(false);

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
    startTimer();
    restart();
  };

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  useEffect(() => {
    if ((whiteTime === 0 || blackTime === 0) && timer.current) {
      setOpen((prevState) => !prevState);
      clearInterval(timer.current);
    }
  }, [whiteTime, blackTime]);

  return (
    <div>
      {open && currentPlayer && <Modal color={currentPlayer.color} setOpen={setOpen} />}
      <button className={styles.button} onClick={handleRestart} type="submit">Перезапустить игру</button>
      <h2>
        Черные -
        {' '}
        {blackTime}
      </h2>
      <h2>
        Белые -
        {' '}
        {whiteTime}
      </h2>
    </div>
  );
};

export default Timer;
