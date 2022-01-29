import React, { VFC } from 'react';
import classNames from 'classnames/bind';
import './Hero.module.scss';
import * as styles from './Hero.module.scss';
import { Cta } from '../../types';

export interface IHero {
  _type: 'hero';
  _key: string;
  title?: string | null;
  description?: string | null;
  ctaList?: Cta[];
}

const Hero: VFC<IHero> = () => {
  return (
    <div className={styles.hero}>
      <h2
        className={classNames(styles.hero__title, {
          [styles.hero__titleRed]: true,
        })}
      >
        Hero placeholder
      </h2>
    </div>
  );
};

export default Hero;
