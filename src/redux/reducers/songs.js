import { ADD_SONGS, SET_SONGS_ADDED } from '../actions/types';

const INITIAL_STATE = {
  songsAdded: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {

    case ADD_SONGS:
      return {
        ...state,
        songsAdded: null,
      };

    case SET_SONGS_ADDED:
      return {
        ...state,
        songsAdded: payload,
      };

    default:
      return state;
  }
}
