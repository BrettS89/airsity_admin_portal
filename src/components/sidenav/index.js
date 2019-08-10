import React from 'react';
import './index.css';
import SidenavView from './view';
import NavCard from './subComponents/navCard';

const sideNav = [
  { name: 'Add Songs', icon: 'fas fa-compact-disc', key: '0', url: "/addsongs", params: 'addsongs' },
  { name: 'Push notifications', icon: 'fas fa-comment-alt', key: '1', url: "/pushnotifications", params: 'pushnotifications' },
  { name: 'Log out', icon: 'fas fa-sign-out-alt', key: '2', url: "/logout", params: 'logout' }
];

class Sidenav extends React.Component {
  renderSideNav = () => {
    return sideNav.map(n => {
      return (
        <NavCard
          key={n.key}
          nav={n}
          screen={this.props.state.screen}
        />
      );
    });
  };

  render () {
    return (
      <SidenavView
        renderSideNav={this.renderSideNav}
        screen={this.props.state.screen}
      />
    );
  }
}

export default Sidenav;
