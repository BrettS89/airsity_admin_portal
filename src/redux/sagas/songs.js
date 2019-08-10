import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/types';
import * as appActions from '../actions/app';
import * as authActions from '../actions/auth';
import * as songsActions from '../actions/songs';
import { apiAddSongs } from '../../lib/apiCalls';

export default [
  addSongsWatcher,
];

function * addSongsWatcher() {
  yield takeLatest(actionTypes.ADD_SONGS, addSongsHandler);
}

function * addSongsHandler({ payload }) {
  try {
    yield put(appActions.setIsLoading());
    const body = JSON.stringify(payload);
    const { songsAdded, error } = yield call(apiAddSongs, body);

    if (songsAdded || songsAdded === 0) {
      yield put(songsActions.setSongsAdded(songsAdded));
    } else if (error === 'jwt expired') {
      yield put(appActions.setIsNotLoading());
      yield put(authActions.setTokenExpired());
    } else {
      yield put(songsActions.setSongsAdded('error'));
    }

    yield put(appActions.setIsNotLoading());
  } catch(e) {
    yield put(appActions.setIsNotLoading());
    console.log('addSongsHandler error: ', e);
  }
}
