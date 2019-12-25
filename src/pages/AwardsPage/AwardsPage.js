import React from 'react';
import { useSelector } from 'react-redux';
import style from './AwardsPage.module.css';
import AwardsTitle from '../../components/AwardsTitle/AwardsTitle';
import ContainerList from '../../components/CardsList';
import AwardsSubmitButton from '../../components/AwardsSubmitButton/AwardsSubmitButton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const AwardsPage = () => {
  const awards = useSelector(state => state.awards.arrayAwards);

  return (
    <div className={style.wrapper_awards}>
      <div className={style.present_items}>
        <AwardsTitle />
        <ProgressBar />
      </div>
      <div className={style.present_cards}>
        {awards && <ContainerList arr={awards} />}
      </div>
      <AwardsSubmitButton />
    </div>
  );
};

export default AwardsPage;
