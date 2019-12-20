import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const AuthPage = () => {
  return (
    <>
      <AuthForm />
    </>
  );
};

export default withAuthRedirect(AuthPage);
