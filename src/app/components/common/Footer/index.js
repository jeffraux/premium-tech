import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = ({
  inverted,
}) => {
  return (
    <footer className="page-footer">
      <section>
        <code>we are premiumtech.</code>
        <h3>
          we're a creative, collaborative, consultative software development company based in makati city, philippines.
        </h3>
        <Link to="about" className="link">learn more {'>'}</Link>
      </section>
      <div className="divider" />
      <section className="shortcuts">
        <div>
          <span>OUR SERVICES</span>
          <Link>UI & UX Design</Link>
          <Link>Web & Mobile Development</Link>
          <Link>Deployment & Maintenance</Link>
        </div>
        <div>
          <span>ABOUT US</span>
          <Link>Our Work</Link>
          <Link>Our Team</Link>
          <Link>Contact Us</Link>
        </div>
      </section>
      © 2021 Premium Tech, Inc. All Rights Reserved.
    </footer>
  );
}

export default Footer;
