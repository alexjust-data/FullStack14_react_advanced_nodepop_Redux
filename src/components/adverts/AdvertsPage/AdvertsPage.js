import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoaded } from '../../../store/actions';
import { getAdverts } from '../service';
import { getAdvertsList, getAdvertsLoading } from '../../../store/selectors';

import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { defaultFilters, filterAdverts } from './filters';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsList); 
  const isLoading = useSelector(getAdvertsLoading); 
  const [filters, setFilters] = useState(getFilters);

  useEffect(() => {
    // Cargar los adverts si la lista está vacía
    if (adverts.length === 0 && !isLoading) {
      getAdverts().then(advertsFromApi => {
        dispatch(advertsLoaded(advertsFromApi));
      });
    }
    saveFilters(filters);
  }, [dispatch, adverts.length, isLoading, filters]);

  const filteredAdverts = filterAdverts(adverts, filters);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={adverts.length} />
      )}
    </>
  );
}

export default AdvertsPage;


