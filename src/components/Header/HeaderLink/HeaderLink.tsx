import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderLink.module.scss';

interface HeaderLinkProps {
  adress: string
  text: string

}

const HeaderLink: FC<HeaderLinkProps> = ({ adress, text }) => {
  return (
    <NavLink to={adress} className={styles['header__link']}>
      {text}
    </NavLink>
  );
};

export default HeaderLink;
