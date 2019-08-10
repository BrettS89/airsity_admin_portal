import { SET_SCREEN, SET_IS_LOADING, SET_IS_NOT_LOADING } from '../actions/types';

const INITIAL_STATE = {
  screen: null,
  isLoading: false,
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {

    case SET_SCREEN:
      return {
        ...state,
        screen: payload,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case SET_IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
