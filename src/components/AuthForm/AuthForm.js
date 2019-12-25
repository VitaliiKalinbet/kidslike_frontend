import React, { Component } from 'react';
import { validateAll } from 'indicative/validator';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as authOperation from '../../redux/auth/authOperation';
import s from './AuthForm.module.css';
import { ReactComponent as IconGoogle } from '../../assets/icons/icon google/icon-google.svg';
import 'react-toastify/dist/ReactToastify.css';
import * as authSelectors from '../../redux/auth/authSelectors';
import * as authActions from '../../redux/auth/authActions';

const validationRules = {
  email: 'required|email',
  password: 'required|min:6|max:12',
};

const validationMessages = {
  'email.required': "Це обов'язкове поле!",
  'password.required': "Це обов'язкове поле!",
  'email.email': 'Введіть валідну електронну пошту!',
  'password.min': 'Пароль має бути не менше 6 символів!',
  'password.max': 'Пароль має бути не більше 12 символів!',
};

class AuthForm extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onRegister: PropTypes.func.isRequired,
    cleanError: PropTypes.func.isRequired,
    serverError: PropTypes.func.isRequired,
  };

  state = { email: '', password: '', error: null, typeSubmit: '' };

  ids = {
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
  };

  setTypeSubmit = type => this.setState({ typeSubmit: type });

  handleChange = e => {
    const { cleanError, serverError } = this.props;
    if (serverError) cleanError(null);

    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { typeSubmit, email, password } = this.state;
    const { onLogin, onRegister } = this.props;

    // валидация
    validateAll({ email, password }, validationRules, validationMessages)
      .then(() => {
        if (typeSubmit === 'register') {
          onRegister({ email, password });
          return;
        }
        if (typeSubmit === 'login') {
          onLogin({ email, password });
          return;
        }
        this.setState({ email: '', password: '', error: null });
      })
      .catch(errors => {
        const formatedErrors = {};
        errors.forEach(error => {
          // console.log('error', error);

          formatedErrors[error.field] = error.message;
        });
        this.setState({
          error: formatedErrors,
        });
      });
  };

  render() {
    const { email, password, error } = this.state;
    const { serverError } = this.props;
    if (serverError) {
      switch (serverError) {
        case 'users was not saved':
          toast.error(
            'Користувач з такою электронную поштою вже зареєстрований!',
            { position: toast.POSITION.TOP_CENTER },
          );
          break;

        case 'User in not defined':
          toast.error(
            'Користувач з такою электронную поштою не зареєстрований!!',
            {
              position: toast.POSITION.TOP_CENTER,
              // autoClose: 900,
            },
          );
          break;

        case 'Password is invalid':
          toast.error('Введений пароль невірний!', {
            position: toast.POSITION.TOP_CENTER,
          });
          break;

        default:
          console.log('success');
      }
    }
    return (
      <>
        <div className={s.auth}>
          <div className={s.auth__wrapper}>
            <p className={`${s.auth__description} ${s.description__first}`}>
              Ви можете авторизуватися за допомогою Google Account:
            </p>
            <a
              className={s.auth__link__google}
              href="https://kidslike.herokuapp.com/api/auth/google"
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

            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className={s.auth__form}>
                <label className={s.auth__label} htmlFor={this.ids.emailId}>
                  E-mail&#58;
                  <input
                    className={`${s.auth__input} ${s.auth__input__first}`}
                    id={this.ids.emailId}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    // required
                    value={email}
                    onChange={this.handleChange}
                  />
                  {error && <span className={s.error}>{error.email}</span>}
                </label>

                <label className={s.auth__label} htmlFor={this.ids.passwordId}>
                  Пароль&#58;
                  <input
                    className={s.auth__input}
                    id={this.ids.passwordId}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    // required
                    // minLength="6"
                    // maxLength="12"
                    // size="6"
                    value={password}
                    onChange={this.handleChange}
                  />
                  {error && <span className={s.error}>{error.password}</span>}
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
        <ToastContainer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperation.register(data)),
  onLogin: data => dispatch(authOperation.login(data)),
  cleanError: data => dispatch(authActions.errorRegister(data)),
});

const mapStateToProps = store => ({
  serverError: authSelectors.getServerError(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
