import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { advertCreated } from '../../../store/actions'; 
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
    });
  };

  const isLoading = false; 

  return <NewAdvertForm onSubmit={handleSubmit} isLoading={isLoading} />;
}

export default NewAdvertPage;

