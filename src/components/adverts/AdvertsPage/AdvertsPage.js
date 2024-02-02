import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoaded } from '../../../store/actions';
import { getAdverts } from '../service';

import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { defaultFilters, filterAdverts } from './filters';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const dispatch = useDispatch();
  // Seleccionar los adverts del estado de Redux
  const adverts = useSelector(state => state.adverts.list);
  const isLoading = useSelector(state => state.adverts.isLoading);
  const [filters, setFilters] = useState(getFilters);

  useEffect(() => {
    // Cargar los adverts si la lista está vacía
    if (adverts.length === 0) {
      getAdverts().then(adverts => {
        dispatch(advertsLoaded(adverts));
      });
    }
    saveFilters(filters);
  }, [dispatch, adverts.length, filters]);

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

