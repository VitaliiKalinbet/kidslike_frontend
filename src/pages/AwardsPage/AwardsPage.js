import React from 'react';
import style from './AwardsPage.module.css';
import AwardsTitle from '../../components/AwardsTitle/AwardsTitle';
import AwardsSubmitButton from '../../components/AwardsSubmitButton/AwardsSubmitButton';

const AwardsPage = () => {
  return (
    <div>
      <div className={style.present_items}>
        <AwardsTitle />
        <div className={style.present_cards}>
          <div className={style.present_card} />
          <div className={style.present_card} />
          <div className={style.present_card} />
          <div className={style.present_card} />
          <div className={style.present_card} />
          <div className={style.present_card} />
          <div className={style.present_card} />
          <div className={style.present_card} />
        </div>
      </div>
      <AwardsSubmitButton />
    </div>
  );
};

export default AwardsPage;
