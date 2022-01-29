import React, { VFC } from 'react';
import * as styles from './Footer.module.scss';
import { FooterProps } from './Footer.types';

const Footer: VFC<FooterProps> = () => {
  return <div className={styles.footer}>Footer placeholder</div>;
};

export default Footer;
