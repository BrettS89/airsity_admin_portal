import React from 'react';
import { Input } from 'semantic-ui-react';

export default function loginView(props) {
  return (
    <div className="login-container top-space">
      <form className="login-form-container" onSubmit={props.login}>
        <i className="fas fa-user-circle"></i>
        <div className="sign-in-container">
          <hr/>
          <div className="sign-in-text">Sign in</div>
          <hr/>
        </div>
        <div className="login-inputs">
          <Input style={{ marginBottom: 20 }} name="email" placeholder="Email address" type="email" />
          <Input name="password" placeholder="Password" type="password" />
        </div>

        <button className="login-button">
          Login
        </button>

      </form>
    </div>
  );
}
