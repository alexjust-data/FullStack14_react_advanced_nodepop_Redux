import { combineReducers } from 'redux';
import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    ADVERT_LOADED,
    ADVERTS_LOADED,
    ADVERTS_CREATED,
    ADVERT_CREATED,
    ADVERT_DELETED,
    TAGS_LOADED,
} from './types';

const defaultState = { auth: false, adverts: [] };
const initialState = { token: null };
const initialAdvertsState = { list: [], detail: null };

// Auth reducer
function auth(state = defaultState.auth, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return true;
        case AUTH_LOGOUT:
            return false;
        default:
            return state;
    }
}

// Session reducer
function session(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, token: action.payload };
        case AUTH_LOGOUT:
            return { ...state, token: null };
        default:
            return state;
    }
}

// Tags reducer
function tags(state = [], action) {
    switch (action.type) {
        case TAGS_LOADED:
            return action.payload;
        default:
            return state;
    }
}

// Adverts reducer
function adverts(state = initialAdvertsState, action) {
    switch (action.type) {
        case ADVERTS_LOADED:
            return { ...state, list: action.payload };
        case ADVERT_LOADED:
            return { ...state, detail: action.payload };
        case ADVERT_CREATED:
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        case ADVERTS_CREATED:
            return { 
                ...state, 
                list: [...state.list, action.payload], 
                detail: action.payload 
            };
        case ADVERT_DELETED:
            return {
                ...state,
                list: state.list.filter(advert => advert.id !== action.payload),
                detail: state.detail && state.detail.id === action.payload ? null : state.detail,
            };
        default:
            return state;
    }
}

// Combina todos los reducers en un rootReducer
const rootReducer = combineReducers({
    auth,
    session,
    tags,
    adverts,
});

export default rootReducer;
