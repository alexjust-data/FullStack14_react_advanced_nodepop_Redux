import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//import { useAuth } from '../context';
import { login } from '../service';
import LoginForm from './LoginForm';
import useMutation from '../../../hooks/useMutation';

import { useDispatch } from 'react-redux';
import { authLogin } from '../../../store/actions';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //const { handleLogin } = useAuth();
  const { isLoading, error, execute, resetError } = useMutation(login);

  const onLogin = () => {  
    dispatch(authLogin());
  };

  const handleSubmit = credentials => {
    execute(credentials)
      .then(() => onLogin()) // Aquí garantizamos que onLogin se llama solo después de que execute se resuelva
      .then(() => {
        const from = location.state?.from?.pathname || '/';
        navigate(from);
      });
  };
  

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
