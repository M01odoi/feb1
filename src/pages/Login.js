import React from 'react';
import FuncInput from '../components/FuncInput';
import validation from '../validation';
import api from '../api/api';
import '../login.css'


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.props.login || '',
      password: this.props.password || ''
    }
  }

  submit = (e) => {
    e.preventDefault();

    api(this.state);
    console.log('Login: ' + this.state.login + '\nPassword: ' + this.state.password);
    this.setState({ login: '', password: '' })
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.submit}>
          <h1>Sign in</h1>
          <FuncInput name="Login" type="email" value={this.state.login}
                     onChange={event => this.setState({ login: event.target.value })}/>

          <FuncInput name="Password:" type="password" value={this.state.password}
                     onChange={event => this.setState({ password: event.target.value })}
          />
          <input type="submit" value="Send to console" className={'button'}/>
        </form>
      </div>
    )
  }
}