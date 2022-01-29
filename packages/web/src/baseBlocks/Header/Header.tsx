import React, { VFC } from 'react';

import { HeaderProps } from './Header.types';

import * as styles from './Header.module.scss';

const Header: VFC<HeaderProps> = () => {
  return <div className={styles.header}>Header placeholder</div>;
};

export default Header;
