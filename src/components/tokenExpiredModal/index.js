import React from 'react';
import './index.css';
import TokenExpiredModalView from './view';

class TokenExpiredModal extends React.Component {
  navigateToLogin = () => {
    this.props.history.push('login');
    this.props.actions.isNotError();
  };

  render() {
    return (
      <TokenExpiredModalView
        tokenExpired={this.props.state.tokenExpired}
      />
    )
  }
}

export default TokenExpiredModal;