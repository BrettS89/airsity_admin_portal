import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../redux/actions/app';
import * as songsActions from '../redux/actions/songs';
import AddSongs from '../components/addSongs';

function mapStateToProps(state) {
  return {
    state: {
      songsAdded: state.songs.songsAdded,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...appActions,
    ...songsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSongs);
