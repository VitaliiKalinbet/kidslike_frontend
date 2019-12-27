import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.css';
import { ModalLogoutOpen } from '../../redux/global/globalActions';
import defaultuserlogo from '../../assets/icons/userinfo/UserInfoLogo.jpg';

// eslint-disable-next-line consistent-return
const changeUserName = name => {
  // const name = oldName.length > 10 ? oldName.slice(0, 10) : oldName;
  if (name.indexOf('_') !== -1) {
    return name.slice(0, name.indexOf('_'));
  }
  if (name.indexOf('_') !== -1) {
    return name.slice(0, name.indexOf('_'));
  }
  if (name.indexOf(' ') !== -1) {
    return name.slice(0, name.indexOf(' '));
  }
  if (name.indexOf('.') !== -1) {
    return name.slice(0, name.indexOf('.'));
  }
  if (name.indexOf('@') !== -1) {
    return name.slice(0, name.indexOf('@'));
  }
};

const UserInfo = ({ isModalLogoutOpen, user }) => {
  const defaultName = user.email;
  return (
    <div>
      <div className={styles.userinfobox}>
        <div className={styles.userData}>
          <img
            className={styles.userinfologo}
            alt="userlogo"
            src={user.avatar || defaultuserlogo}
          />
          <p className={styles.userinfoname}>
            {changeUserName(user.name || defaultName)}
          </p>
        </div>
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
