/* eslint-disable react/prop-types */
import React from 'react';
import s from './CardBody.module.css';

const CardBody = ({ img, alt }) => {
  return (
    <img
      className={s.CardBody}
      src={`${img}`}
      alt={`${alt}`}
      width="280"
      height="192"
    />
  );
};

export default CardBody;
