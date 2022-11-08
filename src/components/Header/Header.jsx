import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectLoggedIn } from 'Redux/auth/auth-selectors';

import UserMenu from 'components/UserMenu';
import Section from 'components/Section';
import css from './Header.module.css';

function Header() {
  const isLoggedIn = useSelector(selectLoggedIn);

  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };

  return (
    <nav style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Section>
        <div style={{ fontSize: '35px', margin: '0px' }} href="#home">
          Phonebook App
        </div>
        <div
          style={{
            justifyContent: 'space-around',
            display: 'flex',
            maxWidth: 960,
            margin: '20px 0 auto',
            padding: '0 16px',
          }}
        >
          <NavLink className={getActiveClassName} end to="/">
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink className={getActiveClassName} end to="/contacts">
              Contacts
            </NavLink>
          )}

          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <NavLink className={getActiveClassName} end to="/login">
                Login
              </NavLink>
              <NavLink className={getActiveClassName} end to="/register">
                Register
              </NavLink>
            </>
          )}
        </div>
      </Section>
    </nav>
  );
}

export default Header;
