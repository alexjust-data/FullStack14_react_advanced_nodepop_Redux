import { Link } from 'react-router-dom';
import { ConfirmationButton } from '../../common';
import { logout } from '../service';
import useMutation from '../../../hooks/useMutation';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../../store/actions';

const AuthButton = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);
  const mutation = useMutation(logout);

  const onLogout = () => {
    dispatch(authLogout());
  };

  const handleLogoutConfirm = async () => {
    await mutation.execute();
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

