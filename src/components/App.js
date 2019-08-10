import React from 'react';
import Navigation from '../navigation';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import store from '../redux';

class App extends React.Component {
  render () {
    return (
      <Provider store={store()}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
