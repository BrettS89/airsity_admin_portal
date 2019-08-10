import { ADD_SONGS, SET_SONGS_ADDED } from './types';

export const addSongs = payload => ({
  type: ADD_SONGS,
  payload,
});

export const setSongsAdded = payload => ({
  type: SET_SONGS_ADDED,
  payload,
});
