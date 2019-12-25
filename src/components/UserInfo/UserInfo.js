import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.css';
import { ModalLogoutOpen } from '../../redux/global/globalActions';
import userlogo from '../../assets/icons/userinfo/UserInfoLogo.jpg';

const UserInfo = ({ isModalLogoutOpen }) => (
  <div>
    <div className={styles.userinfobox}>
      <img className={styles.userinfologo} alt="userlogo" src={userlogo} />
      <p className={styles.userinfoname}>Ваня</p>
      <button
        onClick={isModalLogoutOpen}
        type="button"
        className={styles.userinfobutton}
      >
        Вийти
      </button>
    </div>
  </div>
);

UserInfo.propTypes = {
  isModalLogoutOpen: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  isModalLogoutOpen: () => dispatch(ModalLogoutOpen()),
});

export default connect(null, mapDispatchToProps)(UserInfo);
