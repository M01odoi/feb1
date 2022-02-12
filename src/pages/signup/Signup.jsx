import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../routes';
import FormBuilder from '../../components/FormBuilder';
import { field } from './fields';


const defaultValid = { name: [], email: [], password: [], confpass: [] }

export default function Signup(props) {
  const [validate, setValidate] = useState(defaultValid);
  const [sign, setSign] = useState({
    name: props.name || '',
    email: props.email || '',
    password: props.password || '',
    confpass: props.confpass || ''
  });
  const navigate = useNavigate();
  //
  // const validateFunc = ({ name, email, password, confpass }) => {
  //   setValidate({
  //     name: [validation.minLength({ value: name, field: 'name', length: 4 }),
  //       validation.maxLength({ value: name, field: 'name' })],
  //     email: [validation.maxLength({ value: email, field: 'email' }),
  //       validation.isEmail({ value: email, field: 'email' }),
  //       validation.isEmailUnique({ value: email, field: 'email' })
  //     ], password: [
  //       validation.minLength({ value: password, field: 'password' }),
  //       validation.maxLength({ value: password, field: 'password' }),
  //       validation.password({ value: password, field: 'password' })
  //     ], confpass: [validation.match({ firstPass: password, secondPass: confpass, field: 'confpass' })],
  //   });
  // }
  const isValue = (validate) => {
    let submit = false;
    for (const validateKey in validate) {
      if (validate[validateKey].filter((error) => !!error.error).length)
        submit = true;
    }
    return submit;
  }
  useEffect(() => {
    if (!isValue(validate) && sign.name) {
      console.log('Name: ' + sign.name + '\nEmail: ' + sign.email
        + '\nPassword: ' + sign.password + '\nConfirm password: ' + sign.confpass);
      setSign({ name: '', email: '', password: '', confpass: '' });
      props.api.signUp(sign).then((user) => {
        console.log(user);
        navigate(login);
      });
    }
  }, [validate]);

  const validateAndSubmit = (e) => {
    e.preventDefault();
    props.api.signUp(sign).then((user) => {
      console.log(user);
      navigate(login);
    });
  }

  return (
    <FormBuilder fields={field} submit={validateAndSubmit} state={sign} setState={setSign}/>
  )
}