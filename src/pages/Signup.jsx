import React, { useEffect, useState } from 'react';
import FuncInput from '../components/FuncInput';
import validation from '../validation';
import { useNavigate } from 'react-router-dom';
import { login } from '../routes';


const defaultValid = { name: [], email: [], password: [], confpass: [] }

export default function Signup(props) {
  const [validate, setValidate] = useState(defaultValid);
  const [sign, setSign] = useState({
    name: props.name||'',
    email: props.email||'',
    password: props.password||'',
    confpass: props.confpass||''
  });
  const navigate = useNavigate();

  const validateFunc = ({ name, email, password, confpass }) => {
    setValidate({
      name: [validation.minLength(name, 'name'), validation.maxLength(name, 'name')],
      email: [validation.maxLength(email, 'email'), validation.isEmail(email, 'email'),
        validation.isEmailUnique(email,'email')
      ], password: [
        validation.minLength(password, 'password'),
        validation.maxLength(password, 'password'),
        validation.password(password, 'password')
      ], confpass: [validation.match(password, confpass, 'confpass')],
    });
  }
  const isValue = (validate) => {
    let submit = false;
    for (const validateKey in validate) {
      if (validate[validateKey].filter((error) => !!error.error).length)
        submit = true;
    }
    return submit;
  }
  useEffect(() => {
    if(!isValue(validate)&&sign.name){
      console.log('Name: ' + sign.name + '\nEmail: ' + sign.email
        + '\nPassword: ' + sign.password + '\nConfirm password: ' + sign.confpass);
      setSign({ name: '', email: '', password: '', confpass: '' });
      props.api.signUp(sign).then((user)=>{
        console.log(user);
        navigate(login);
      });
    }
  },[validate]);

  const validateAndSubmit = (e) => {
    e.preventDefault();
    validateFunc({ ...sign });
  }

  const renderErrors = (field) => {
    return field.filter((error) => !!error.error).map((error, index) => (
        <span key={index} className="span">{error.error}</span>
      )
    )
  }
  return (
    <div className="form">
      <form onSubmit={validateAndSubmit}>
        <h1>Sign up</h1>
        <FuncInput name="Your name" value={sign.name}
                   onChange={event => setSign({ ...sign, name: event.target.value })}/>
        {renderErrors(validate.name)}
        <FuncInput name="Email" value={sign.email}
                   onChange={event => setSign({ ...sign, email: event.target.value })}/>
        {renderErrors(validate.email)}
        <FuncInput name="Password" type="password" value={sign.password}
                   onChange={event => setSign({ ...sign, password: event.target.value })}/>
        {renderErrors(validate.password)}
        <FuncInput name="Confirm password" type="password" value={sign.confpass}
                   onChange={event => setSign({ ...sign, confpass: event.target.value })}/>
        {renderErrors(validate.confpass)}

        <button className={'button'}>Send to console</button>
      </form>
    </div>
  )
}