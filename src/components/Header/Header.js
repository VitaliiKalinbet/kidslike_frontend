import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as moment from 'moment';
import { connect } from 'react-redux';
import slideTransition from '../../transitions/fade.module.css';
import Navigation from '../Navigation/Navigation';
import HeaderModal from '../HeaderModal/HeaderModal';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/header-icons/burger.svg';
import logoMobile from '../../assets/icons/header-icons/Logo_mobile.png';
import Zaglushka from '../../assets/icons/header-icons/Zaglushka.jpg';
import * as authOperation from '../../redux/auth/authOperation';

class Header extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const { onLogout } = this.props;
    const unixDate = Date.now();
    const currentDay = moment().format('dddd');
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
            <Navigation />
            <div className={styles.authModule}>
              <img className={styles.userLogo} alt="Zagl" src={Zaglushka} />

              <p className={styles.userName}>Ваня</p>

              <button
                onClick={this.openModal}
                className={styles.button}
                type="button"
              >
                <Logo />
              </button>
            </div>
          </div>
          <button type="button" onClick={onLogout}>
            Вийти
          </button>
        </header>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperation.logout()),
});

export default connect(null, mapDispatchToProps)(Header);
