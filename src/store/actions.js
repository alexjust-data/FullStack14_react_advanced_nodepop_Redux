import { AUTH_LOGIN, AUTH_LOGOUT, ADVERTS_LOADED } from './types';

export const authLogin = (token) => ({
  type: AUTH_LOGIN,
  payload: token,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const advertsLoaded = adverts => ({
  type: ADVERTS_LOADED,
  payload: adverts,    
});

