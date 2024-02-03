

// estado de autenticación
export const getIsAuthenticated = state => !!state.session.token;

// token de sesión
export const getSessionToken = state => state.session.token;

// la lista de anuncios
export const getAdvertsList = state => state.adverts.list;

// Selector para el estado de carga de los anuncios
export const getAdvertsLoading = state => state.adverts.isLoading;

// Selector para obtener los tags
export const getTags = state => state.tags;

// Selector para obtener el detalle de un anuncio específico
export const getAdvertDetail = state => state.adverts.detail;


