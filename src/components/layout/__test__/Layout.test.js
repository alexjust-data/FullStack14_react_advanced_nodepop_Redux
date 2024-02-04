import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Layout from '../Layout';

const mockStore = configureStore();
const store = mockStore({
  session: {
    token: null 
  },
  // Otros estados iniciales si fueran necesarios
});

describe('Layout', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

