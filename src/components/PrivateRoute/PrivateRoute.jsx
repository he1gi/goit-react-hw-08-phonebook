import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectLoggedIn } from 'Redux/auth/auth-selectors';

function PrivateRoute({ redirect = '/login' }) {
  const isLoggedIn = useSelector(selectLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirect}></Navigate>;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
