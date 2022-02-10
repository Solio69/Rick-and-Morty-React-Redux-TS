import React, { FC } from 'react';
import styles from './Logo.module.scss';

interface LogoProps {
  logoSrc: string
}

const Logo: FC<LogoProps> = ({ logoSrc }) => {
  return (
    <img src={logoSrc} alt="logo" className={styles['logo']} />
  );
};

export default Logo;
