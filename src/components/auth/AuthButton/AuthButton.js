import { Link } from 'react-router-dom';

import { ConfirmationButton } from '../../common';
import { logout } from '../service';
import useMutation from '../../../hooks/useMutation';
import { useAuth } from '../context';

import { useDispatch } from 'react-redux';
import { authLogout } from '../../../store/actions';

const AuthButton = () => {
  const dispatch = useDispatch();
  const { isLogged, handleLogout } = useAuth();
  const mutation = useMutation(logout);

  const onLogout = () => {
    dispatch(authLogout());
  };

  const handleLogoutConfirm = async () => {
    await mutation.execute();
    handleLogout();
    onLogout();
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
