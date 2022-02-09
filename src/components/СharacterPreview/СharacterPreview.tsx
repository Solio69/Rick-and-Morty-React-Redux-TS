import React, { FC } from 'react';
import styles from './СharacterPreview.module.scss';

interface СharacterPreviewProps {
  image: string
  name: string
}

const СharacterPreview: FC<СharacterPreviewProps> = ({ image, name }) => {
  return (
    <li className={styles['character']}>
      <span className={styles['character__title']}>{name}</span>
      <div className={styles['character__img-wrapper']}>
        <img src={image} alt="character" />
      </div>
    </li>
  );
};

export default СharacterPreview;
