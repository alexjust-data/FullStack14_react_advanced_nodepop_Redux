import client, { configureClient, resetClient } from '../../api/client';
import storage from '../../utils/storage';

const authPath = '/auth';


export const login = ({ remember, ...credentials }) => {
  return client
    .post(`${authPath}/login`, credentials)
    .then(({ accessToken }) => {
      configureClient({ accessToken });
      if (remember) {
        storage.set('auth', accessToken);
        console.log('Token guardado en localStorage:', accessToken);
      }
      return accessToken;
    });
};

export const logout = () => {
  return Promise.resolve().then(resetClient).then(storage.clear);
};