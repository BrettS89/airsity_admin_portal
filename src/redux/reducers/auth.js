import { SET_TOKEN_EXPIRED, SET_TOKEN_NOT_EXPIRED } from '../actions/types';

const INITIAL_STATE = {
  tokenExpired: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_TOKEN_EXPIRED:
      return {
        ...state,
        tokenExpired: true,
      };

    case SET_TOKEN_NOT_EXPIRED:
      return {
        ...state,
        tokenExpired: false,
      };
    
    default:
      return state;
  }
}
