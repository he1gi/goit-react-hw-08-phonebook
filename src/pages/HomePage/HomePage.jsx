import Section from 'components/Section';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectLoggedIn } from 'Redux/auth/auth-selectors';
import css from './HomePage.module.css';

function HomePage() {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <Section>
      {isLoggedIn ? (
        <h1 className={css.title}>
          {' '}
          Thank you for being with us! We appreciate it!
        </h1>
      ) : (
        <div>
          <div>
            <div className={css.container}>
              <h1 className={css.title}>
                Hi! This is Phonebook App! You can create an account and store
                your contacts!
                <span role="img" aria-label="Greeting icon">
                  💁‍♀️
                </span>
              </h1>
            </div>
          </div>
          <Outlet />
        </div>
      )}
    </Section>
  );
}

export default HomePage;
