import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './AwardsPage.module.css';
import AwardsTitle from '../../components/AwardsTitle/AwardsTitle';
import CardsList from '../../components/CardsList';
import AwardsSubmitButton from '../../components/AwardsSubmitButton/AwardsSubmitButton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';

const AwardsPage = ({ isOpen }) => {
  const awards = useSelector(state => state.awards.arrayAwards);
  return (
    <div className={style.wrapper_awards}>
      {isOpen && <ModalCongrats />}
      <div className={style.present_cards}>
        <div className={style.present_items}>
          <AwardsTitle />
          <ProgressBar />
        </div>
        <div className={style.card_list_wrapper}>
          <CardsList arr={awards} />
        </div>
        <AwardsSubmitButton />
      </div>
    </div>
  );
};
AwardsPage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isOpen: state.global.isModalCongratsOpen,
});
export default connect(mapStateToProps)(AwardsPage);
