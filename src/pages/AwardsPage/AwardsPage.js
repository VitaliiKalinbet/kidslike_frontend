import React from 'react';
import style from './AwardsPage.module.css';
import AwardsTitle from '../../components/AwardsTitle/AwardsTitle';
import CardsList from '../../components/CardsList';
import AwardsSubmitButton from '../../components/AwardsSubmitButton/AwardsSubmitButton';

const AwardsPage = () => {
  return (
    <div>
      <div className={style.present_items}>
        <AwardsTitle />
      </div>
      <div className={style.present_cards}>
        <CardsList />
      </div>
      <AwardsSubmitButton />
    </div>
  );
};

export default AwardsPage;
