import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  it('should match snapshot', () => {
    //proveer una función "mock" (un sustituto o simulación) para el prop onSubmit 
    //usando jest.fn(). Esta es una forma de crear una función que no tiene una 
    //implementación específica, pero verificar se llamé, con qué argumentos, etc. 
    const mockSubmit = jest.fn();
    const { asFragment } = render(
      <LoginForm onSubmit={mockSubmit} isLoading={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
