import React, { FC } from 'react';
import logo from '../../../assets/rick-and-morty-logo.png';
import styles from './HeaderLogo.module.scss';

const HeaderLogo: FC = () => {
  return (
    <img src={logo} alt="logo" className={styles['logo']} />
  );
};

export default HeaderLogo;
