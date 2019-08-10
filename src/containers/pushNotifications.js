import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../redux/actions/app';
import PushNotifications from '../components/pushNotifications';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...appActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(PushNotifications);
