import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { advertLoaded, advertDeleted } from '../../../store/actions';
import { getAdvert, deleteAdvert } from '../service';

import AdvertDetail from './AdvertDetail';

function AdvertPage() {
  const { advertId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const advert = useSelector(state => state.adverts.detail);
  const isLoading = useSelector(state => state.adverts.isLoading);

  useEffect(() => {
    if (!advert || advert.id !== advertId) {
      getAdvert(advertId).then(advert => {
        dispatch(advertLoaded(advert));
      });
    }
  }, [dispatch, advert, advertId]);

  const handleDelete = () => {
    deleteAdvert(advertId).then(() => {
      dispatch(advertDeleted(advertId));
      navigate('/');
    });
  };

  if (isLoading || !advert) {
    return 'Loading...';
  }

  return (
    <AdvertDetail
      onDelete={handleDelete}
      isLoading={isLoading}
      {...advert}
    />
  );
}

export default AdvertPage;

