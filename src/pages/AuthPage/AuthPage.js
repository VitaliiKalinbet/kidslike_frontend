import React from 'react';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  return (
    <>
      <div className={styles.bck__color}>
        <div className={styles.auth__bck}>
          <div className={styles.container}>
            <h2 className={styles.auth__title}>
              Виконуй завдання, отримай класні призи!
            </h2>
            <div className={styles.auth__reg}>Registration</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
