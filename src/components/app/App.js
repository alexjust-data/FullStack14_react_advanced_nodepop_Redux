import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

// Importa tus acciones y funciones de API
import { advertsLoaded, tagsLoaded } from '../../../src/store/actions';
import { getAdverts, getTags } from '../../../src/components/adverts/service';

import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { LoginPage, RequireAuth } from '../auth';
import NotFoundPage from './NotFoundPage';
import Layout from '../layout';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Cargar los adverts y tags cuando la aplicación se inicia
    getAdverts().then(adverts => {
      dispatch(advertsLoaded(adverts));
    }).catch(error => {
      console.error("Failed to load adverts", error);
    });

    getTags().then(tags => {
      dispatch(tagsLoaded(tags));
    }).catch(error => {
      console.error("Failed to load tags", error);
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/adverts"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route index element={<AdvertsPage />} />
        <Route path="new" element={<NewAdvertPage />} />
        <Route path=":advertId" element={<AdvertPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/404" element={<Layout />}>
        <Route index element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
