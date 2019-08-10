import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../redux/actions/auth';
import TokenExpiredModal from '../components/tokenExpiredModal';

function mapStateToProps({ auth }) {
  return {
    state: {
      tokenExpired: auth.tokenExpired,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...authActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenExpiredModal);
