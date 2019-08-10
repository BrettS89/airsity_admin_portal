import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidenav from '../components/sidenav';

function mapStateToProps(state) {
  return {
    state: {
      screen: state.app.screen
    },
  };
}

export default connect(mapStateToProps)(Sidenav);
