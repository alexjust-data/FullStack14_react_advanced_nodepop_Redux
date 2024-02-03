// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { configureClient } from './api/client';
// import storage from './utils/storage';
// import './index.css';
// import App from './components/app';
// import { AuthProvider } from './components/auth/context';
// import { authLogin } from './store/actions';

// import configureStore from './store';
// import Root from './Root';

// const accessToken = storage.get('auth');
// console.log("Token recuperado al cargar la app:", accessToken);
// console.log("AccessToken al cargar la app:", accessToken);

// configureClient({ accessToken });


// const store = configureStore({ session: { token: accessToken } });
// console.log("store: configureStore({ session: { token: accessToken || null } });", store);

// // Si hay un accessToken, despacha la acción authLogin para establecerlo en Redux.
// if (accessToken) {
//   store.dispatch(authLogin(accessToken));
// }

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Root store={store}>
//       <AuthProvider isInitiallyLogged={!!accessToken}>
//         <App />
//       </AuthProvider>
//     </Root>
//   </React.StrictMode>,
// );


// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app';
import Root from './Root';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>
);



