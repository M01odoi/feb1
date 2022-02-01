import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.props.login,
      password: this.props.password
    }
  }

  Submit = (e) => {
    e.preventDefault();
    console.log('Login: ' + this.state.login + '\nPassword: ' + this.state.password);
    this.setState({login:'', password:''})
  }

  render() {
    return (
      <form onSubmit={this.Submit}>
        <h1>Sign in</h1>
        <div className={'line'}>Login: <input type="email" value={this.state.login}
                           onChange={event => this.setState({ login: event.target.value })}/></div>
        <div className={'line'}>Password: <input type="password" value={this.state.password}
                              onChange={event => this.setState({ password: event.target.value })}/></div>
        <input type="submit" value='Send to console' className={'button'}/>
      </form>

    )
  }

}