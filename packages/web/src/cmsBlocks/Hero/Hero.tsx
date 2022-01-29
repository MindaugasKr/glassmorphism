import React, { VFC } from 'react';
import classNames from 'classnames/bind';
import * as styles from './Hero.module.scss';
import { HeroProps } from './Hero.types';

const Hero: VFC<HeroProps> = () => {
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
