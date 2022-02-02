import React from 'react';
import Input from './Input';
import FuncInput from './FuncInput';
import './login.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.props.login,
      password: this.props.password
    }
  }

  submit = (e) => {
    e.preventDefault();
    console.log('Login: ' + this.state.login + '\nPassword: ' + this.state.password);
    this.setState({ login: '', password: '' })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <h1>Sign in</h1>
        <div className={'line'}>Login: <FuncInput type="email" value={this.state.login}
                                              onChange={event => this.setState({ login: event.target.value })}/>
        </div>
        <div className={'line'}>Password:
          <FuncInput type="password" value={this.state.password}
                 onChange={event => this.setState({ password: event.target.value })}
          /></div>
        <FuncInput type="submit" value="Send to console" className={'button'}/>
      </form>

    )
  }

}