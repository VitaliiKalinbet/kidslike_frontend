import React from 'react';
import styles from './UserInfo.module.css';
import userlogo from '../../assets/icons/userinfo/UserInfoLogo.jpg';

// import ModalLogout from '../ModalLogout/ModalLogout';
// import AuthForm from '../AuthForm/AuthForm';
// import { refresh } from '../../redux/auth/authOperation';
// import Axios from 'axios';

// import withAuthRedirect from '../../hoc/withAuthRedirect';
// import { Redirect } from 'react-router-dom';
// import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';

// import ModalLogout from '../ModalLogout/ModalLogout';
// import { connect } from 'react-redux';

// import PropTypes from 'prop-types';

// ================================================================

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

// ==============================================================

// const UserInfo = ( userinfologo, userinfoname, onClose ) => (
//   <div>
//     <div className={styles.userinfobox}>
//       <img className={styles.userinfologo} alt="userlogo" src={userlogo} />
//       <p className={styles.userinfoname}>Ваня</p>
//       <button
//         type="button"
//         className={styles.userinfobutton}
//         onClick={onLogOut}
//       >
//         <link to="/src/components/ModalLogout/ModalLogout.js">Вийти</link>
//       </button>
//     </div>
//   </div>
// );

//   {authenticated &&  <UserInfo onClose={onClose} />

// const mapStateToProps = state => ({
//   authOperation: sessionSelectors.getIsAuthenticated(state)
// });

// export default connect(null, mapDispatchToProps)(UserInfo);

// ==============================================================

//   const mapStateToProps => ({
//     username: sessionSelectors.getUserName(state),
//     authenticated && sessionSelectors.getIsAuthenticated(state)
//   });

//   const refreshCurrentUserInfoRequest = () => ({
//     type: ActionType.REFRESH_CURRENT_REQUEST
//   });

//   const refreshCurrentUserInfoSuccess = response => ({
//     type: ActionType.REFRESH_CURRENT_SUCCESS,
//     payload: { response }
//   });

//   const refreshCurrentUserInfoError = error => ({
//     type: ActionType.REFRESH_CURRENT__ERROR,
//     payload: { error }
//   });

//   const refreshCurrentUserInfo = () => (dispatch, getState) => (
//   const token = sessionSelectors.getToken(getState());

//   if(token) {
//     return;
//   }

//   dispatch(refreshCurrentUserInfoRequest());

// const options = {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// };

// ++++++++++++++++++++++++++++++++++++++++=========

// const UserInfo = ({ userinfologo, userinfoname, onLogout}) => (
//   <div>
//      <div className={styles.userinfobox}>
//        <img className={styles.userinfologo} alt="userlogo" src={userlogo}>{userinfo.logo}</img>
//        <p className={styles.userinfoname}>{userinfo.name}</p>
//        <button type="button" className={styles.userinfobutton} onClick={onLogOut}>
//         Вийти
//        </button>
//      </div>
//    </div>
// )

// const mapDispatchToProps = dispatch => ({
//   onLogin: data => dispatch(authOperation.login(data)),
//   onLogout: data => dispatch(authOperation.logout(data)),
// });

// export default connect(null, mapDispatchToProps)(UserInfo);

// +++++++++++++==============================================================
//   const logOut = () => dispatch => {
//     clearAuthToken();

//   dispatch(logOut());
//   };

//   const mapStateToProps => ({
//     username: sessionSelectors.getUserName(state),
//     authenticated && sessionSelectors.getIsAuthenticated(state)
//   });

//   const refreshCurrentUserInfoRequest = () => ({
//     type: ActionType.REFRESH_CURRENT_REQUEST
//   });

//   const refreshCurrentUserInfoSuccess = response => ({
//     type: ActionType.REFRESH_CURRENT_SUCCESS,
//     payload: { response }
//   });

//   const refreshCurrentUserInfoError = error => ({
//     type: ActionType.REFRESH_CURRENT__ERROR,
//     payload: { error }
//   });

//   const refreshCurrentUserInfo = () => (dispatch, getState) => (
//   const token = sessionSelectors.getToken(getState());

//   if(token) {
//     return;
//   }

//   dispatch(refreshCurrentUserInfoRequest());

// const options = {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// };

// ++++++++=================================================

// axios.defaults.baseURL ='http://localhost4040'

// // https://kidslike.herokuapp.com/
// // http://localhost4040

// export clearAuthToken = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// export const login = credentials => dispatch => {
//   dispatch(loginRequest());
//   axios
//   .get('auth/current', options).then(response => {
//     setAuthToken(response.data.token);
//     dispatch(refreshCurrentUserInfoSuccess(response.data));
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }
// ++++++++============================================

// export const logOut = () => ({
//   type: ActionType.LOGOUT
// });

// ============================================

// class UserInfo extends Component {
//   componentDidUpdate(prevProps) {

//   // const prevAuth = prevProps.authenticated;
//   // const nextAuth = this.props.authenticated;

//   if(this.prop.authenticated) {
//     this.prop.history replace ({

//     })
//   }
//   }

// }

//   render() {
//     const { userinfoname, userinfologo } = this.state;
//     return (
//       <>
//         <div className={styles.userinfobox} />
//         <img className={styles.userinfologo} alt="userlogo" src={userlogo} />
//         <p className={styles.userinfoname}>Ваня</p>
//         <button className={styles.userinfobutton}>Выйти</button>
//       </>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onLogin: data => dispatch(authOperation.login(data)),
//   onLogout: data => dispatch(authOperation.logout(data)),
// });

// export default connect(null, mapDispatchToProps)(UserInfo);

// UserInfo.propTypes = {
//   userinfologo: PropTypes.string.isRequired,
//   userinfoname: PropTypes.string.isRequired,
// };
