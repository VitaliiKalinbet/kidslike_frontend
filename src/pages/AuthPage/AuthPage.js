import React from 'react';
import styles from './AuthPage.module.css';
import AuthForm from '../../components/AuthForm/AuthForm';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Footer from '../../components/Footer/Footer';

const AuthPage = () => {
  return (
    <>
      <div className={styles.bck__color}>
        <div className={styles.auth__bck}>
          <div className={styles.container}>
            <h2 className={styles.auth__title}>
              Виконуй завдання, отримай класні призи!
            </h2>
            <AuthForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default withAuthRedirect(AuthPage);
