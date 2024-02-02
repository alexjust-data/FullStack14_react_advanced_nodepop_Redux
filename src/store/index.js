import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

import { devToolsEnhancer } from '@redux-devtools/extension';
import * as actionCreators from './actions';

export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    devToolsEnhancer({ actionCreators }),
  );
  return store;
}

