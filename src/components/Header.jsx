import React from 'react';
import { Link } from 'react-router-dom';
import { home, login, signup } from '../routes';
import '../header.css';

const Header = () => {
  return (
      <header>
        <nav className={'nav'}>
          <Link to={home} className={'logo'}>Dev <div className={'logo2'}>Bro</div></Link>
          <ul className={'ul'}>
            <li>
              <Link to={home}>Home</Link>
            </li>
            <li>
              <Link to={login}>Login</Link>
            </li>
            <li>
              <Link to={signup}>Sign up</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;