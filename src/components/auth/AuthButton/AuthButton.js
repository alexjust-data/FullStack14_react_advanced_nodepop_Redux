import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ConfirmationButton } from '../../common';
import { logout } from '../service';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../../store/actions';

const AuthButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(state => state.auth); 

  const handleLogoutConfirm = async () => {
    try {
      await logout(); 
      dispatch(authLogout());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

export default AuthButton;

