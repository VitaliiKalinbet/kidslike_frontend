import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';
import * as authOperation from '../../redux/auth/authOperation';
import s from './AuthForm.module.css';
import { ReactComponent as IconGoogle } from '../../assets/icons/icon google/icon-google.svg';

class AuthForm extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onRegister: PropTypes.func.isRequired,
  };

  state = { email: '', password: '', typeSubmit: '' };

  ids = {
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
  };

  setTypeSubmit = type => this.setState({ typeSubmit: type });

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { typeSubmit, email, password } = this.state;
    const { onLogin, onRegister } = this.props;
    if (typeSubmit === 'register') {
      onRegister({ email, password });
      this.setState({ email: '', password: '' });
      return;
    }
    if (typeSubmit === 'login') {
      onLogin({ email, password });
      this.setState({ email: '', password: '' });
      return;
    }
    onLogin({ email, password });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className={s.auth}>
          <div className={s.auth__wrapper}>
            <p className={`${s.auth__description} ${s.description__first}`}>
              Ви можете авторизуватися за допомогою Google Account:
            </p>
            <a
              className={s.auth__link__google}
              href="http://localhost:8080/api/auth/google"
            >
              <div className={s.auth__link__wrapper}>
                <IconGoogle width="28" height="28" />
                <span className={s.auth__link__span}>Google</span>
              </div>
            </a>
            <p className={`${s.auth__description} ${s.description__second}`}>
              Або зайти за допомогою e-mail та паролю, попередньо
              зареєструвавшись:
            </p>

            <form onSubmit={this.handleSubmit}>
              <div className={s.auth__form}>
                <label className={s.auth__label} htmlFor={this.ids.emailId}>
                  E-mail&#58;
                  <input
                    className={`${s.auth__input} ${s.auth__input__first}`}
                    id={this.ids.emailId}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor={this.ids.passwordId} className={s.auth__label}>
                  Пароль&#58;
                  <input
                    className={s.auth__input}
                    id={this.ids.passwordId}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    minLength="6"
                    maxLength="12"
                    size="6"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className={s.auth__buttons}>
                <button
                  onClick={() => this.setTypeSubmit('login')}
                  className={s.auth__button}
                  type="submit"
                >
                  Увійти
                </button>
                <button
                  onClick={() => this.setTypeSubmit('register')}
                  className={s.auth__button}
                  type="submit"
                >
                  Зареєструватися
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperation.register(data)),
  onLogin: data => dispatch(authOperation.login(data)),
});

export default connect(null, mapDispatchToProps)(AuthForm);
