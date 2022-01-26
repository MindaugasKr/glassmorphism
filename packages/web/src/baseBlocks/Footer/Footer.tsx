import React, { VFC } from 'react';
import './Footer.scss';

interface IFooter {
  // placeholder
}

const Footer: VFC<IFooter> = () => {
  const className = 'footer';

  return <div className={className}>Footer placeholder</div>;
};

export default Footer;
