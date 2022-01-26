import React, { VFC } from 'react';
import './Hero.scss';
import { Cta } from '../../types';

export interface IHero {
  _type: 'hero';
  _key: string;
  title?: string | null;
  description?: string | null;
  ctaList?: Cta[];
}

const Hero: VFC<IHero> = () => {
  const className = 'hero';

  return <div className={className}>Hero placeholder</div>;
};

export default Hero;
