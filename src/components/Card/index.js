/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

const Card = ({ ...task }) => {
  // console.log('task :', task);

  const { imgName, ...taskInfo } = task;

  return (
    <article>
      <CardBody img={imgName} />
      <CardFooter {...taskInfo} />
    </article>
  );
};

export default Card;
