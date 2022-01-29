import React, { FC } from 'react';
import * as styles from './PrimaryLayout.module.scss';
import Header from '../baseBlocks/Header';
import Footer from '../baseBlocks/Footer';

interface IPrimaryLayout {
  // placeholder
}

const PrimaryLayout: FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div className={styles.primaryLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
