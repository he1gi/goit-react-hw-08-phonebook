import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectLoggedIn } from 'Redux/auth/auth-selectors';

function PublicRoute({ restricted = false, redirect = '/contacts' }) {
  const isLoggedIn = useSelector(selectLoggedIn);
  return isLoggedIn && restricted ? (
    <Navigate to={redirect}></Navigate>
  ) : (
    <Outlet />
  );
}

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  redirect: PropTypes.string,
};

export default PublicRoute;
