import React, { VFC } from 'react';
import * as styles from './Header.module.scss';

interface IHeader {
  // placeholder
}

const Header: VFC<IHeader> = () => {
  return <div className={styles.header}>Header placeholder</div>;
};

export default Header;
