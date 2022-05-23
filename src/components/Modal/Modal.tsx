import React, { FC, SetStateAction } from 'react';
import styles from './modal.module.scss';
import Colors from '../../models/Colors';

interface IModalProps {
  color: Colors
  setOpen: React.Dispatch<SetStateAction<boolean>>
}

const Modal: FC <IModalProps> = ({ color, setOpen }) => {
  const handleChange = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.modal} onClick={handleChange}>
      <div className={styles.modalContent} onClick={(event) => event.stopPropagation()}>
        <h2>Игра окончена</h2>
        <h2>
          Проиграли
          {' '}
          {color}
        </h2>
      </div>
    </div>
  );
};

export default Modal;
