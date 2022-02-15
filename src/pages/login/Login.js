import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { home } from '../../routes';
import FormBuilder from '../../components/formBuilder/FormBuilder';
import { field } from './fields';

const Login = (props) => {
  // const [paramsForEnter, setParamsForEnter] = useState({ login: '', password: '' });
  const navigate = useNavigate();

  const submit = (e, state) => {
    e.preventDefault();
    const user = state.reduce((acc, elem) => ({...acc,[elem.name]:elem.value}),{})
    if (props.api.signIn(user)) {
      props.api.signIn(user);
      navigate(home);
    }
    console.log(user);
  }

  return (<>
      <h1>Sign in</h1>
      <FormBuilder fields={field} submit={submit}/>
    </>
  )
}
export default Login;