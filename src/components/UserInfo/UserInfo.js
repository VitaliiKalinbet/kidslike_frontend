import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.css';
import { ModalLogoutOpen } from '../../redux/global/globalActions';
import defaultuserlogo from '../../assets/icons/userinfo/UserInfoLogo.jpg';

const UserInfo = ({ isModalLogoutOpen, user }) => {
  const defaultName = user.email;
  return (
    <div>
      <div className={styles.userinfobox}>
        <img
          className={styles.userinfologo}
          alt="userlogo"
          src={user.avatar || defaultuserlogo}
        />
        <p className={styles.userinfoname}>
          {user.name || defaultName.slice(0, defaultName.indexOf('@'))}
        </p>
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
};

UserInfo.defaultProps = {
  user: {
    name: '',
    avatar: '',
    email: '',
  },
};

UserInfo.propTypes = {
  isModalLogoutOpen: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  isModalLogoutOpen: () => dispatch(ModalLogoutOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
