import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as moment from 'moment';
import slideTransition from '../../transitions/fade.module.css';
import Navigation from '../Navigation/Navigation';
import HeaderModal from '../HeaderModal/HeaderModal';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/header-icons/burger.svg';
import logoMobile from '../../assets/icons/header-icons/Logo_mobile.png';
// import Zaglushka from '../../assets/icons/header-icons/Zaglushka.jpg';

class Header extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const unixDate = Date.now();
    const currentDay = moment().format('dddd');
    const { isAuth } = this.props;
    return (
      <>
        <CSSTransition
          in={isModalOpen}
          timeout={1000}
          unmountOnExit
          classNames={slideTransition}
        >
          <HeaderModal onClose={this.closeModal} />
        </CSSTransition>
        <header className={styles.header}>
          <Link
            to={{
              pathname: '/',
              search: `?day=${currentDay}&unix-date=${unixDate}`,
            }}
          >
            <img className={styles.siteLogo} alt="SiteLogo" src={logoMobile} />
          </Link>
          <div className={styles.navControls}>
            {!isAuth && <Navigation />}
            <div className={styles.authModule}>
              {/* <img className={styles.userLogo} alt="Zagl" src={Zaglushka} />
              <p className={styles.userName}>Ваня</p>
              {isAuth && (
                <button
                  onClick={this.openLogOutModal}
                  type="button"
                  className={styles.buttonLogout}
                >
                  Вийти
                </button>
              )} */}

              <button
                onClick={this.openModal}
                className={styles.button}
                type="button"
              >
                <Logo />
              </button>
            </div>
          </div>
        </header>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(Header);
