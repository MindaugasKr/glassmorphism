import React, { VFC } from 'react';
import './Header.scss';

interface IHeader {
  // placeholder
}

const Header: VFC<IHeader> = () => {
  const className = 'header';

  return <div className={className}>Header placeholder</div>;
};

export default Header;
