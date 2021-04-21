import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Header.scss';

const Header = ({
  inverted,
  history,
}) => {
  return (
    <header className={`page-header ${inverted ? 'inverted' : ''}`}>
      <h2 onClick={() => history.push('/home')}>
        premium<span class="orange">tech</span>
      </h2>
      <nav className="menu">
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/services'>Services</Link>
        <Link to='/careers'>Careers</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
