import React, { FC } from 'react';
import Logo from '../Logo'
import HeaderLink from './HeaderLink'
import styles from './Header.module.scss';
import headerLogoImg from '../../assets/rick-and-morty-logo.png';

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__logo-wrapper']}>
        <Logo logoSrc={headerLogoImg} />
      </div>
      <div className={styles['header__link-wrapper']}>
        <HeaderLink adress='/characters' text='Home' />
        <HeaderLink adress='/filters' text='Filters' />
        <HeaderLink adress='/about' text='About' />
      </div>

    </header>
  );
};

export default Header;
