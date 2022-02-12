import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { home } from '../../routes';
import FormBuilder from '../../components/FormBuilder';
import { field } from './fields';

const Login = (props) => {
  const [paramsForEnter, setParamsForEnter] = useState({ login: '', password: '' });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (props.api.signIn(paramsForEnter)) {
      props.api.signIn(paramsForEnter);
      navigate(home);
    }
  }

  return (<>
    <h1>Sign in</h1>
    <FormBuilder fields={field} submit={submit} state={paramsForEnter} setState={setParamsForEnter}/>
  </>
  )
}
export default Login;