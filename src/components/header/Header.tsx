import React from 'react';
import {Link} from 'react-router-dom';
import {dashboard, home, login, signup, todolist, weather} from '../../routes';
import './header.css';

const Header = ({ auth, logout }:{auth:boolean,logout:void}) => {
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
              <Link to={dashboard}>dash</Link>
            </li>
            <li>
              <Link to={todolist}>ToDoList</Link>
            </li>
            <li>
              <Link to={weather}>Weather</Link>
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