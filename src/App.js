import Login from './pages/login/Login';
import Signup from './pages/Signup';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { dashboard, home, login, signup } from './routes';
import Header from './components/header/Header';
import { useState } from 'react';
import apiCreator from './api/api';
import AuthHoc from './components/hoc/AuthHoc';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();
  const api = apiCreator(setIsAuth, setCurrentUser)
  const logout = () => {
    setIsAuth(false);
    setCurrentUser(false);
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
          <Route path={dashboard} element={<AuthHoc isAuth={isAuth}><Dashboard currentUser={currentUser}/></AuthHoc>}/>

          <Route path="*" element={<Home/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
