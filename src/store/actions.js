import { AUTH_LOGIN, 
         AUTH_LOGOUT, 
         ADVERTS_LOADED,
         TAGS_LOADED,
         ADVERT_LOADED,
         ADVERT_CREATED,
         ADVERT_DELETED, 
        } from './types';

export const authLogin = (token) => ({
  type: AUTH_LOGIN,
  payload: token,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

// adverds
export const advertsLoaded = adverts => ({
  type: ADVERTS_LOADED,
  payload: adverts,    
});


// tags
export const tagsLoaded = tags => ({
  type: TAGS_LOADED,
  payload: tags,
});

// adverd
export const advertLoaded = advert => ({
  type: ADVERT_LOADED,
  payload: advert,
});

export const advertCreated = advert => ({
  type: ADVERT_CREATED,
  payload: advert,
});

export const advertDeleted = advertId => ({
  type: ADVERT_DELETED,
  payload: advertId,
});


