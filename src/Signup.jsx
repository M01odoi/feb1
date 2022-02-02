import React, { useState } from 'react';
import FuncInput from './components/FuncInput';
import validation from './validation';

export default function Signup(props) {
  const [sign, setSign] = useState({
    name: props.name,
    email: props.email,
    password: props.password,
    confpass: props.confpass
  })


  const submit = (e) => {
    e.preventDefault();
// //[validation, setValidation] = useState({ name: ''' , email: '' })
    let mas = [sign.name, sign.email, sign.password, sign.confpass];
//     let validationArr = [];
//     for (const elem of mas) {
//       validationArr.push(validation.minLength(elem, 'name/email/password/confpass').valid);
//       validationArr.push(validation.maxLength(elem, 'name/email/password/confpass').valid);
//     }
//     console.log(validationArr + ' validator array');
//     console.log(validation.isEmail(sign.email, 'email'));
//     console.log(validation.match(sign.password, sign.confpass, 'confpass'));
//     console.log(validation.pass(sign.password, 'password'));
    console.log('Name: ' + sign.name + '\nEmail: ' + sign.email
      + '\nPassword: ' + sign.password + '\nConfirm password: ' + sign.confpass);
    setSign({ name: '', email: '', password: '', confpass: '' });
  }
  const print = () => {
    const arr = [];
    let type;
    for (const key in sign) {
      if (key ==="email")
        type="login";
      else if(key ==='password')
        type='password';
      arr.push(<FuncInput key ={key} type={type} value={sign[key]} onChange={event => setSign({ ...sign, key: event.target.value })}/>);
    }
    return arr;
  }
  return (
    <form onSubmit={submit}>
      {print()}
      {/*<FuncInput value={sign.name} onChange={event => setSign({ ...sign, name: event.target.value })}/>*/}
      {/*<FuncInput value={sign.email} type="login" onChange={event => setSign({ ...sign, email: event.target.value })}/>*/}
      {/*<FuncInput value={sign.password} type="password"*/}
      {/*           onChange={event => setSign({ ...sign, password: event.target.value })}/>*/}
      {/*<FuncInput value={sign.confpass} type="password"*/}
      {/*           onChange={event => setSign({ ...sign, confpass: event.target.value })}/>*/}
      <FuncInput type="submit"/>
    </form>
  )
}