import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/types';
import * as appActions from '../actions/app';
import { apiLogin } from '../../lib/apiCalls';

export default [
  loginWatcher,
  logoutWatcher,
];

function * loginWatcher() {
  yield takeLatest(actionTypes.ON_LOGIN, loginHandler);
}

function * logoutWatcher() {
  yield takeLatest(actionTypes.ON_LOGOUT, logoutHandler);
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    yield put(appActions.setIsLoading());
    const { token } = yield call(apiLogin, JSON.stringify(form));
    if (!token) throw new Error('no token');
    localStorage.setItem('token', token);
    yield put(appActions.setIsNotLoading());
    navigate();
  } catch(e) {
    yield put(appActions.setIsNotLoading());
    console.log('loginHandler error: ', e);
  }
}

function * logoutHandler() {
  try {
    yield localStorage.clear();
    // yield put(authActions.resetStore());
  } catch(e) {
    console.log('logoutHandler error: ', e);
  }
}
