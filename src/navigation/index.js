import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navbar from '../containers/navbar';
import Sidenav from '../containers/sidenav';
import Login from '../containers/login';
import AddSongs from '../containers/addSongs';
import PushNotifications from '../containers/pushNotifications';

import LoadingModal from '../components/LoadingModal';
import TokenExpiredModal from '../containers/tokenExpiredModal';

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="subcontainer">
          <Sidenav />
          <Switch>
            <Route path="/addsongs" component={AddSongs} />
            <Route path="/pushnotifications" component={PushNotifications} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
        <LoadingModal />
        <TokenExpiredModal />
      </React.Fragment>
    </BrowserRouter>
  );
};
