import React, { FC } from 'react';
import HeaderLogo from './HeaderLogo'
import HeaderLink from './HeaderLink'
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__logo-wrapper']}>
        <HeaderLogo />
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
