// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// export default function Root({ store, children }) {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>{children}</BrowserRouter>
//     </Provider>
//   );
// }

// src/Root.js

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/configureStore';
import { AuthProvider } from './components/auth/context';

const Root = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;
