import { combineReducers } from 'redux';
import appReducer from './app';
import authReducer from './auth';
import songsReducer from './songs';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  songs: songsReducer,
});
