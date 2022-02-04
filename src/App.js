import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, useNavigate
} from 'react-router-dom';
import { home, login, signup } from './routes';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth,setIsAuth] = useState(false);
  const [currentUser,setCurrentUser] = useState(false);
  const navigate = useNavigate();
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
        <Route path={login} element={<Login auth={setIsAuth} currentUser={setCurrentUser}/>}/>
        <Route path={signup} element={<Signup/>}/>
        <Route path={home} element={<Home currentUser={currentUser}/>}/>
        {isAuth&&<Route path='/Dash' element={<Dashboard/>}/> }

        {/*<Route path='*' element={<Home/>}/>*/}
      </Routes>
</div>
    </>
  );
}

export default App;
