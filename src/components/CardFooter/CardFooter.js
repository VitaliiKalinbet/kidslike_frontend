import React from 'react';
import PointAmount from '../PointAmount/PointAmount';
import CardTitle from '../CardTitle/CardTitle';
import CardControl from '../CardControl/CardControl';
import s from './CardFooter.module.css';

const CardFooter = () => {
  return (
    <div className={s.card_footer}>
      <div>
        <CardTitle />
        <PointAmount />
      </div>
      <div>
        <CardControl />
      </div>
    </div>
  );
};

export default CardFooter;
