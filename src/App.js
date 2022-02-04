import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { home, login, signup } from './routes';
import Header from './components/Header';

//


function App() {
  return (

    <>
    <Header/>
<div className={'app'}>
      <Routes>
        <Route path={login} element={<Login/>}/>
        <Route path={signup} element={<Signup/>}/>
        <Route path={home} element={<Home/>}/>
      </Routes>
</div>
    </>
  );
}

export default App;
