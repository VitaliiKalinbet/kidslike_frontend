/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
// import s from './Card.module.css';

const Card = ({ img, title, header, interactive }) => {
  const { pathname, search } = useLocation();

  useEffect(() => {}, [pathname, search]);

  return (
    <article>
      {/* <img
          src={img}
          width="280"
          height="192"
          alt={title}
          className={s.card_img}
        /> */}
      <CardBody />
      <CardFooter />
      {/* <div className={s.card_footer}>
          <span>{header}</span>
          <span>{interactive}</span>
        </div> */}
    </article>
  );
};

export default Card;
