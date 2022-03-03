import * as React from 'react';
import {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {dashboard, home, login, signup, todolist, weather} from './routes';
import apiCreator from './api/api'; /*TODO*/
import Login from './pages/login/Login.tsx';
import Signup from './pages/signup/Signup.tsx';
import Home from './pages/home/Home.tsx';
import Dashboard from './pages/dashboard/Dashboard'/*TODO*/
import TodoList from './pages/todoList/TodoList.tsx';
import Header from './components/header/Header.tsx';
import AuthHoc from './components/hoc/AuthHoc';/*TODO*/
import Weather from './pages/weather/Weather';/*TODO*/
import Footer from './components/footer/Footer.tsx';

function App() {
    const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('currentUser'));
    const [isAuth, setIsAuth] = useState(!!currentUser);
    const navigate:Function = useNavigate();
    const api: object = apiCreator(setIsAuth, setCurrentUser);
    const logout = () => {
        setIsAuth(false);
        setCurrentUser(null);
        sessionStorage.setItem('currentUser', null);
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
            <Footer/>
        </>
    );
}

export default App;
