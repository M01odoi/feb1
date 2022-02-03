import React, { useEffect, useState } from 'react';
import FuncInput from '../components/FuncInput';
import validation from '../validation';

const defaultValid = { name: [], email: [], password: [], confpass: [] }
export default function Signup(props) {
  const [validate, setValidate] = useState(defaultValid);
  const [sign, setSign] = useState({
    name: props.name,
    email: props.email,
    password: props.password,
    confpass: props.confpass
  })

  const validateFunc = ({ name, email, password, confpass }) => {
    setValidate({
      name: [validation.minLength(name, 'name'), validation.maxLength(name, 'name')],
      email: [validation.maxLength(email, 'email'), validation.isEmail(email, 'email')
      ], password: [
        validation.minLength(password, 'password'),
        validation.maxLength(password, 'password'),
        validation.pass(password, 'password')
      ], confpass: [validation.match(password, confpass, 'confpass')]
    });
  }
  const submitOrNot = (validate) => {
    let submit = false;
    for (const validateKey in validate) {
      if (validate[validateKey].filter((error) => !!error.error).length)
        submit = true;
    }
    return submit;
  }
  const submit = (e) => {
    e.preventDefault();
    validateFunc({ ...sign });
    if (submitOrNot(validate)) {
      console.log('111111111111111111111111111');
    } else {
      console.log('Name: ' + sign.name + '\nEmail: ' + sign.email
        + '\nPassword: ' + sign.password + '\nConfirm password: ' + sign.confpass);
      setSign({ name: '', email: '', password: '', confpass: '' });
    }
  }

  const renderErrors = (field) => {
    return field.filter((error) => !!error.error).map((error, index) => (
        <span key={index} className="span">{error.error}</span>
      )
    )
  }
  return (
    <div className="form">
      <form onSubmit={submit}>
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

        <input type="submit"  value="Send to console" className={'button'}/>
      </form>
    </div>
  )
}