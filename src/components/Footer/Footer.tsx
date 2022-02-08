import React, { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span>© 2022 Copyright <a href='https://github.com/Solio69'>Anastasiya Kazanina</a></span>
    </footer>
  );
};

export default Footer;
