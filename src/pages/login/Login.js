import React, { useEffect, useState } from 'react';
import FuncInput from '../../components/FuncInput';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { home } from '../../routes';

const Login = (props) => {
  const [login, setLogin] = useState(props.login || '');
  const [password, setPassword] = useState(props.password || '');
  const [validate, setValidate] = useState(null);
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    setValidate(props.api.signIn({
        login,
        password
      }) ? '' : 'Email or Password dont correct'
    );
    console.log(validate);
    props.api.signIn({ login, password });

  }
  useEffect(() => {
    if (validate !== null && validate === '') {
      navigate(home);
      setLogin('');
      setPassword('');
    }
  }, [validate])

  return (
    <div className="form">
      <form onSubmit={submit}>
        <h1>Sign in</h1>
        <FuncInput name="Login:" type="email" value={login}
                   onChange={event => setLogin(event.target.value)}/>
        <FuncInput name="Password:" type="password" value={password}
                   onChange={event => setPassword(event.target.value)}
        />
        {validate && <span className='span'>{validate}</span>}
        <input type="submit" value="Send to console" className={'button'}/>
      </form>
    </div>
  )
}
export default Login;