import React from 'react';
import styles from './UserInfo.module.css';
import userlogo from '../../assets/icons/userinfo/UserInfoLogo.jpg';
// import AuthForm from '../AuthForm/AuthForm';
// import PropTypes from 'prop-types';

const UserInfo = () => (
  <div>
    <div className={styles.userinfobox}>
      <img className={styles.userinfologo} alt="userlogo" src={userlogo} />
      <p className={styles.userinfoname}>Ваня</p>
      <button type="button" className={styles.userinfobutton}>
        Вийти
      </button>
    </div>
  </div>
);

export default UserInfo;
