import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { dashboard, home, login, signup, todolist, weather } from './routes';
import apiCreator from './api/api';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard'
import TodoList from './pages/todoList/TodoList';
import Header from './components/header/Header';
import AuthHoc from './components/hoc/AuthHoc';
import Weather from './pages/weather/Weather';

function App() {
  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('currentUser'));
  const [isAuth, setIsAuth] = useState(!!currentUser);
  const navigate = useNavigate();
  const api = apiCreator(setIsAuth, setCurrentUser)
  const logout = () => {
    setIsAuth(false);
    setCurrentUser(false);
    sessionStorage.setItem('currentUser',null);
    navigate(home);
  }
  return (
    <>
      <Header auth={isAuth} logout={logout}/>
      <div className={'app'}>
        <Routes>
          <Route path={login} element={<Login api={api}/>}/>
          <Route path={signup} element={<Signup api={api}/>}/>
          <Route path={home} element={<Home currentUser={currentUser}/>}/>
          <Route path={dashboard} element={<AuthHoc isAuth={isAuth}>
            <Dashboard currentUser={currentUser}/>
          </AuthHoc>}/>
          <Route path={todolist}
                 element={<AuthHoc isAuth={isAuth}>
                   <TodoList api={api} currentUser={currentUser}/>
                 </AuthHoc>}/>
          <Route path={weather}
                 element={<AuthHoc isAuth={isAuth}>
                   <Weather/>
                 </AuthHoc>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
