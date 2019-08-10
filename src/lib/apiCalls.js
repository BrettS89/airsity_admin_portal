import { URI } from '../config/index';

function getToken() {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('no token');
  return token;
}

export async function apiLogin(payload) {
  const res = await fetch(`${URI}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  });
  return await res.json();
}

export async function apiAddSongs(payload) {
  const res = await fetch(`${URI}/admin/addsongs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': getToken(),
    },
    body: payload,
  });
  return await res.json();
}