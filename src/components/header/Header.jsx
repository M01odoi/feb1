import React from 'react';
import { Link } from 'react-router-dom';
import { home, login, signup } from '../../routes';
import './header.css';

const Header = ({ auth, logout }) => {
  return (
    <header>
      <nav className={'nav'}>
        <Link to={home} className={'logo'}>Dev <div className={'logo2'}>Bro</div></Link>
        <ul className={'ul'}>
          <li>
            <Link to={home}>Home</Link>
          </li>
          {auth ? <>
            <li>
              <Link to="/dash">dash</Link>
            </li>
            <li>
              <button onClick={logout} >Logout</button>
            </li>
          </> : <>
            <li>
              <Link to={login}>Login</Link>
            </li>
            <li>
              <Link to={signup}>Sign up</Link>
            </li>
          </>
          }

        </ul>
      </nav>
    </header>
  );
};

export default Header;