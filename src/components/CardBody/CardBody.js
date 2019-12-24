/* eslint-disable react/prop-types */
import React from 'react';
import bed from '../../assets/images/tasks/bed.jpg';
import book from '../../assets/images/tasks/book.jpg';
import flowers from '../../assets/images/tasks/flowers.jpg';
import sweep from '../../assets/images/tasks/sweep.jpg';
import teeth from '../../assets/images/tasks/teeth.jpg';
import toys from '../../assets/images/tasks/toys.jpg';
import trash from '../../assets/images/tasks/trash.jpg';
import vacuum from '../../assets/images/tasks/vacuum.jpg';
import robot from '../../assets/images/imageRobot.png';
import sweets from '../../assets/images/AwardsPage/1.jpg';
import cinema from '../../assets/images/AwardsPage/2.jpg';
import gift from '../../assets/images/AwardsPage/3.jpg';
import pizza from '../../assets/images/AwardsPage/4.jpg';
import party from '../../assets/images/AwardsPage/5.jpg';
import mcDonalds from '../../assets/images/AwardsPage/6.jpg';
import desire from '../../assets/images/AwardsPage/7.jpg';
import skates from '../../assets/images/AwardsPage/8.jpg';

import s from './CardBody.module.css';

const CardBody = ({ img, alt }) => {
  const currentImg = imgName => {
    switch (imgName) {
      case 'bed':
        return bed;
      case 'book':
        return book;
      case 'flowers':
        return flowers;
      case 'sweep':
        return sweep;
      case 'teeth':
        return teeth;
      case 'toys':
        return toys;
      case 'trash':
        return trash;
      case 'vacuum':
        return vacuum;
      case 'sweets':
        return sweets;
      case 'cinema':
        return cinema;
      case 'gift':
        return gift;
      case 'pizza':
        return pizza;
      case 'party':
        return party;
      case 'mcDonalds':
        return mcDonalds;
      case 'desire':
        return desire;
      case 'skates':
        return skates;
      default:
        return robot;
    }
  };

  return (
    <img
      className={s.CardBody}
      src={`${currentImg(img)}`}
      alt={`${alt}`}
      width="280"
      height="192"
    />
  );
};

export default CardBody;
