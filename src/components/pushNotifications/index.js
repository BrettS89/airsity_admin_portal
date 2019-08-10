import React from 'react';
import './index.css';
import PushNotificationsView from './view';

class PushNotifications extends React.Component {
  componentDidMount() {
    this.props.actions.setScreen('pushnotifications');
  }

  render () {
    return (
      <PushNotificationsView />
    );
  }
}

export default PushNotifications;
