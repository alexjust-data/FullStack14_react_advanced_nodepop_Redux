import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoginPage from '../LoginPage';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    state: { from: { pathname: '/' } }
  }),
}));

jest.mock('../../context', () => ({
  useAuth: () => ({
    handleLogin: jest.fn(),
  }),
}));

jest.mock('../../service', () => ({
  login: jest.fn(),
}));

jest.mock('../../../../hooks/useMutation', () => () => ({
  isLoading: false,
  error: null,
  execute: jest.fn(),
  resetError: jest.fn(),
}));

const mockStore = configureStore();
const store = mockStore({});

describe('LoginPage', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
