import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../redux/actions/app';
import * as authActions from '../redux/actions/auth';
import Login from '../components/login';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...appActions,
    ...authActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Login);
