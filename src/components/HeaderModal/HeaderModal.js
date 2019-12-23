import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import routes from '../../routes/routes';
import styles from './HeaderModal.module.css';

const HeaderModal = ({ isAuth, onClose }) => {
  const currentDay = moment().format('dddd');
  const menuItemsArr = [
    {
      path: {
        pathname: '/',
        search: `?day=${currentDay}&unix-date=${Date.now()}`,
      },
      name: 'Головна',
      protected: true,
    },
    {
      path: routes.AUTH_PAGE.path,
      name: 'Авторизація',
      protected: false,
    },
    { path: routes.PLANNING_PAGE.path, name: 'Планування', protected: true },
    { path: routes.AWARDS_PAGE.path, name: 'Нагороди', protected: true },
    { path: routes.CONTACTS_PAGE.path, name: 'Контакти', protected: false },
  ];
  const renderLinks = menuItemsArr.filter(el =>
    isAuth ? el.path !== routes.AUTH_PAGE.path && true : !el.protected,
  );

  const menuItemsRender = renderLinks.map(el => (
    <li key={el.path} className={styles.navigationItem}>
      <NavLink
        exact
        className={styles.widgetListNav}
        activeStyle={{ color: 'black' }}
        to={el.path}
      >
        {el.name}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.widget}>
      <button className={styles.close} onClick={onClose} type="button" />
      <ul className={styles.widgetList}>{menuItemsRender}</ul>
    </div>
  );
};

HeaderModal.propTypes = {
  isAuth: PropTypes.bool,
  onClose: PropTypes.func,
};

HeaderModal.defaultProps = {
  isAuth: PropTypes.bool,
  onClose: PropTypes.func,
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(HeaderModal);
