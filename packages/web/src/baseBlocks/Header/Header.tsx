import React, { VFC } from 'react';
import * as styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

const Header: VFC<HeaderProps> = () => {
  return <div className={styles.header}>Header placeholder</div>;
};

export default Header;
