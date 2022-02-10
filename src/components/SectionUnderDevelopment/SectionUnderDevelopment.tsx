import React, { FC } from 'react';
import Logo from '../Logo';
import styles from './SectionUnderDevelopment.module.scss';
import blockUnderDevelopmentLogo from '../../assets/block-under-development.png'

const SectionUnderDevelopment: FC = () => {
  return (
    <div className={styles['under-development']}>
      <div className={styles['under-development_logo-wrapper']}>
        <Logo logoSrc={blockUnderDevelopmentLogo} />
      </div>
      <span className={styles['under-development_description']}>This dimension is still under development!</span>
    </div>
  );
};

export default SectionUnderDevelopment;
