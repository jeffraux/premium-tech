import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.scss';

const Banner = ({
  inverted,
  children,
}) => {
  return (
    <section className={`page-banner ${inverted ? 'inverted' : ''}`}>
      {children}
    </section>
  );
}

export default Banner;
