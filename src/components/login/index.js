import React from 'react';
import './index.css';
import LoginView from './view';

class Login extends React.Component {
  componentDidMount() {
    this.props.actions.setScreen('login');
    this.props.actions.setTokenNotExpired();
  }

  navigate = () => {
    this.props.history.push('addsongs');
  };

  onLogin = e => {
    e.preventDefault();
    const form = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    e.target.email.value = '';
    e.target.password.value = '';
    this.props.actions.onLogin({ form, navigate: this.navigate });
  };

  render () {
    return (
      <LoginView
        login={this.onLogin}
      />
    );
  }
}

export default Login;
