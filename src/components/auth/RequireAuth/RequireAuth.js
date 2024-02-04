


import T from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../../store/selectors';

const RequireAuth = ({ children }) => {
  const isLogged = useSelector(getIsAuthenticated);
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

RequireAuth.propTypes = {
  children: T.node,
};

export default RequireAuth;

