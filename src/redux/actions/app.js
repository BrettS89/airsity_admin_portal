import { SET_SCREEN, SET_IS_LOADING, SET_IS_NOT_LOADING } from './types';

export const setScreen = payload => ({
  type: SET_SCREEN,
  payload,
});

export const setIsLoading = () => ({
  type: SET_IS_LOADING,
});

export const setIsNotLoading = () => ({
  type: SET_IS_NOT_LOADING,
});
