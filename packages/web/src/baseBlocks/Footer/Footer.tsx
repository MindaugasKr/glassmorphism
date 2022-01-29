import React, { VFC } from 'react';

import { FooterProps } from './Footer.types';

import * as styles from './Footer.module.scss';

const Footer: VFC<FooterProps> = () => {
  return <div className={styles.footer}>Footer placeholder</div>;
};

export default Footer;
