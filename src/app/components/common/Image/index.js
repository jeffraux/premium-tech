import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const Image = (props) => (
  <ScrollAnimation animateOnce animateIn="fadeIn" offset={100} style={{ zIndex: '2' }}>
    <img {...props} />
  </ScrollAnimation>
);

export default Image;
