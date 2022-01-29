import React, { FC } from 'react';
import * as styles from './PrimaryLayout.module.scss';
import Header from '../baseBlocks/Header';
import Footer from '../baseBlocks/Footer';
import { PrimaryLayoutProps } from './PrimaryLayout.types';

const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <div className={styles.primaryLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
