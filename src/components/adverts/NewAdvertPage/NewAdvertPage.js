import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { advertCreated } from '../../../store/actions'; // Importa la acción de Redux
import { createAdvert } from '../service';
import NewAdvertForm from './NewAdvertForm';

function NewAdvertPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = newAdvert => {
    createAdvert(newAdvert).then(advert => {
      // Despacha la acción de Redux cuando el anuncio se crea exitosamente
      dispatch(advertCreated(advert));
      navigate(`/adverts/${advert.id}`);
    }).catch(error => {
      console.error('Failed to create advert', error);
      // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
    });
  };

  // isLoading podría ser parte del estado de Redux si quieres reflejar el estado de la carga allí
  const isLoading = false; // Deberías obtener este valor del estado de Redux si es necesario

  return <NewAdvertForm onSubmit={handleSubmit} isLoading={isLoading} />;
}

export default NewAdvertPage;

