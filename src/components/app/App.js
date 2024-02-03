import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

// Importa tus acciones y funciones de API
import { advertsLoaded, tagsLoaded } from '../../../src/store/actions';
import { getAdverts, getTags } from '../../../src/components/adverts/service';

import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { LoginPage, RequireAuth } from '../auth';
import NotFoundPage from './NotFoundPage';
import Layout from '../layout';
import { getSessionToken } from '../../store/selectors';
import { configureClient } from '../../api/client';

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector(getSessionToken);


  useEffect(() => {
    console.log("Token de acceso en App useEffect:", accessToken);
    if (accessToken) {
      configureClient({ accessToken });
      // Cargar los adverts y tags solo si el usuario está autenticado
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
    }
  }, [dispatch, accessToken]);

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
