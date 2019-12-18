import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes/routes';
import styles from './Navigation.module.css';

const menuItemsArr = [
  { path: routes.MAIN_PAGE.path, name: 'Головна', protected: true },
  {
    path: routes.AUTH_PAGE.path,
    name: 'Авторизація',
    protected: false,
  },
  { path: routes.PLANNING_PAGE.path, name: 'Планування', protected: true },
  { path: routes.AWARDS_PAGE.path, name: 'Нагороди', protected: true },
  { path: routes.CONTACTS_PAGE.path, name: 'Контакти', protected: false },
];

const Navigation = ({ isAuth = true }) => {
  const renderLinks = menuItemsArr.filter(el =>
    isAuth ? el.path !== routes.AUTH_PAGE.path && true : !el.protected,
  );
  const menuItemsRender = renderLinks.map(el => (
    <li key={el.path} className={styles.navigationItem}>
      <NavLink
        exact
        className={styles.navigationLink}
        activeStyle={{ color: 'black' }}
        to={el.path}
      >
        {el.name}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul className={styles.navigationList}>{menuItemsRender}</ul>
    </nav>
  );
};
Navigation.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
export default Navigation;