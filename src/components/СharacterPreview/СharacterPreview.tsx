import React, { FC } from 'react';
import styles from './СharacterPreview.module.scss';
import { Link } from 'react-router-dom'

interface СharacterPreviewProps {
  image: string
  name: string
  id: number
}

const СharacterPreview: FC<СharacterPreviewProps> = ({ image, name, id }) => {
  const routStr = `/characters/${id}`

  return (
    <Link to={routStr}>
      <li className={styles['character-prew']}>
        <span className={styles['character-prew__title']}>{name}</span>
        <div className={styles['character-prew__img-wrapper']}>
          <img src={image} alt="charaster" />
        </div>
      </li>
    </Link>

  );
};

export default СharacterPreview;
