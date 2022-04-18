import { request } from 'umi';

export async function login(params: { username: string; password: string }) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}

export async function logOut() {
  return request('/api/logout', {
    method: 'POST',
  });
}

export async function getUsers() {
  return request('/api/users', {
    method: 'GET',
  });
}
