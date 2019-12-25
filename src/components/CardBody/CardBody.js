/* eslint-disable react/prop-types */
import React from 'react';
import ImageModule from '../../assets/images/imageModule';

import s from './CardBody.module.css';

const image = new ImageModule();

const CardBody = ({ img, alt }) => (
  <img
    className={s.CardBody}
    src={`${image.getImg(img)}`}
    alt={`${alt}`}
    width="280"
    height="192"
  />
);

export default CardBody;
