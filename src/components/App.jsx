import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authGetCurrentUser } from '../Redux/auth/auth-operation';

import Header from './Header';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authGetCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" end element={<PrivateRoute />}>
            <Route path="" element={<ContactsPage />} />
          </Route>
          <Route path="/login" end element={<PublicRoute restricted />}>
            <Route path="" element={<LoginPage />} />
          </Route>
          <Route path="/register" end element={<PublicRoute restricted />}>
            <Route path="" element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>{' '}
    </>
  );
}
