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

// class UserInfo extends Component {
//   static propTypes = {
//     onLogin: this.PropTypes.func.isRequired,
//     onLogout: this.PropTypes.func.isRequired,
//   };

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

// // export default ({ data, update }) => {
// //   return (
// //     <table className="user-list table table-striped">
// //       <thead>
// //         <tr>
// //           <th>Image</th>
// //           <th>Name</th>
// //           <th>Age</th>
// //           <th>Phone</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         // Здесь будут отображаться все пользователи
// //       </tbody>
// //     </table>
// //   );
// // };
