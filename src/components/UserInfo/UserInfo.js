import React from 'react';
import styles from './UserInfo.module.css';
import logo from '../../assets/icons/userInfo/UserInfo.jpg';

const UserInfo = () => (
  <div>
    <span className={styles.box}>
      <img className={styles.logo} alt="logo" src={logo} />
      <p className={styles.name}>Ваня</p>
      <button type="button">Выйти </button>
    </span>
  </div>
);

export default UserInfo;
