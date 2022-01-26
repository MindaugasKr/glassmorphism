import React, { FC } from 'react';
import './PrimaryLayout.scss';
import Header from '../baseBlocks/Header';
import Footer from '../baseBlocks/Footer';

interface IPrimaryLayout {
  // placeholder
}

const PrimaryLayout: FC<IPrimaryLayout> = ({ children }) => {
  const className = 'primary-layout';

  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
