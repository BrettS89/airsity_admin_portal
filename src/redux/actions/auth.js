import { ON_LOGIN, SET_TOKEN_EXPIRED, SET_TOKEN_NOT_EXPIRED } from './types';

export const onLogin = payload => ({
  type: ON_LOGIN,
  payload,
});

export const onLogout = () => ({
  type: 'RESET',
});

export const setTokenExpired = () => ({
  type: SET_TOKEN_EXPIRED,
});

export const setTokenNotExpired = () => ({
  type: SET_TOKEN_NOT_EXPIRED,
});
