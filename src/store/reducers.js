
import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    ADVERTS_LOADED,
    ADVERTS_CREATED,
} from './types';
  
const defaultState = {
    auth: false,
    adverts: [] 
};
  
  
  
export function auth(state = defaultState.auth, action) {
    switch (action.type) {
        case AUTH_LOGIN:
        return true;
        case AUTH_LOGOUT:
        return false;
        default:
        return state;
    }
}
  
export function adverts(state = defaultState.adverts, action) {
    switch (action.type) {
        case ADVERTS_LOADED:
        return action.payload;

        case ADVERTS_CREATED:
        default:
        return state;
    }
}

const initialState = {
    token: null,
};
  
export function session(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
        return { ...state, token: action.payload };
        case AUTH_LOGOUT:
        return { ...state, token: null };
        default:
        return state;
    }
}
  
  