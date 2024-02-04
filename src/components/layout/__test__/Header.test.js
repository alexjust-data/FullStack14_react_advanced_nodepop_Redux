import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({
  session: {
    token: null 
  },
});

describe('Header', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});


