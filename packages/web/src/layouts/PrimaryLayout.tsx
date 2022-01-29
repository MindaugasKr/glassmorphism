import React, { FC } from 'react';

import Footer from '@/baseBlocks/Footer';
import Header from '@/baseBlocks/Header';

import { PrimaryLayoutProps } from './PrimaryLayout.types';

import * as styles from './PrimaryLayout.module.scss';

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
