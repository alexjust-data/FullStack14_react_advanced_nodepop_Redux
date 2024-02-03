import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utiliza localStorage como predeterminado
import rootReducer from './reducers'; // El nombre de tu archivo de rootReducer

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'] // Solo persistirás el estado de sesión
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
