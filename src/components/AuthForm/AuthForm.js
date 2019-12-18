import React, { Component } from 'react';
import shortid from 'shortid';
import s from './AuthForm.module.css';
import { ReactComponent as IconGoogle } from '../../assets/icons/icon google/icon-google.svg';

class AuthForm extends Component {
  state = { email: '', password: '' };

  ids = {
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
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
              href="https://kidslike.goit.co.ua/api/v1/auth/google/"
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
                <button className={s.auth__button} type="submit">
                  Увійти
                </button>
                <button className={s.auth__button} type="submit">
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

export default AuthForm;
