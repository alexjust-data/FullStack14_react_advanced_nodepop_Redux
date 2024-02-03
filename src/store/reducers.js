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
  
const defaultState = {
    auth: false,
    adverts: [] 
};

const initialState = {
    token: null,
};

// La estructura del estado inicial para los anuncios
const initialAdvertsState = {
    list: [],
    detail: null,
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

export function tags(state = [], action) {
    switch (action.type) {
      case TAGS_LOADED:
        return action.payload;
      default:
        return state;
    }
}


// El reducer para manejar los estados de los anuncios
export function adverts(state = initialAdvertsState, action) {
  switch (action.type) {
    case ADVERTS_LOADED:
      return { ...state, list: action.payload };
    case ADVERT_LOADED:
      // Solo actualiza el detalle de un anuncio específico
      return { 
        ...state, 
        detail: action.payload 
    };
    case ADVERT_CREATED:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false,
        error: null,
    };
    case ADVERTS_CREATED:
      return { 
        ...state, 
        list: [...state.list, action.payload], 
        detail: action.payload 
    };
    case ADVERT_DELETED:
      // Elimina anuncio de lista y limpia detalle si es el mismo que se ha borrado
      return {
        ...state,
        list: state.list.filter(advert => advert.id !== action.payload),
        detail: state.detail && state.detail.id === action.payload ? null : state.detail,
      };
    // ...otros casos
    default:
      return state;
  }
}