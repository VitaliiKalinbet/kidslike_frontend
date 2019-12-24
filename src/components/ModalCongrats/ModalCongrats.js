/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import prizeImage1 from '../../assets/images/AwardsPage/1.jpg';
import prizeImage2 from '../../assets/images/AwardsPage/2.jpg';
import catTop from '../../assets/images/Modal/catTransparent.png';
import styleModalLogout from '../ModalLogout/ModalLogout.module.css';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import AwardsSubmitButton from '../AwardsSubmitButton/AwardsSubmitButton.module.css';
import styleModalCongrats from './ModalCongrats.module.css';

const ModalCongrats = ({ onClose, awards }) => {
  console.log(awards);
  const filteredAwards = awards.filter(award => award.isSelected);
  const result = filteredAwards.reduce((acc, el) => acc + el.taskPoints, 0);

  return (
    <>
      <ModalBackdrop onClose={onClose}>
        <div className={styleModalCongrats.modalSize}>
          <img className={styleModalCongrats.catTop} src={catTop} alt="" />
          <h2 className={styleModalCongrats.modalTitleText}>
            Вітаємо! Ти отримуєш:
          </h2>
          <div className={styleModalCongrats.prizeContainer}>
            <ul className={styleModalCongrats.prizeContainerList}>
              {filteredAwards.map(el => (
                <li key={el.id}>
                  {/* {el.title} */}
                  <img src={`.${el.imgName}`} alt="" />

                  <p className={styleModalCongrats.prizeContainerItemText}>
                    {el.taskPoints}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className={styleModalCongrats.prizeContainerItemText}>
            Сумарна кількість балів: {result}
          </p>

          <div className={styleModalCongrats.buttonContainer}>
            {/* <button className={styleModalLogout.point_amount_long}>
              <p className={styleModalLogout.point_amount_p}>Підтвердити!</p>
            </button> */}
            <div className={AwardsSubmitButton.present_button}>
              <button className={AwardsSubmitButton.button} type="submit">
                ОК
              </button>
            </div>
            {/* <AwardsSubmitButton /> */}
          </div>
        </div>
      </ModalBackdrop>
    </>
  );
};
const mapStateToProps = state => ({
  awards: state.awards.arrayAwards,
});

// const mapDispatchToProps = dispatch => ({
//   onOpenModalLogout: () => dispatch(ModalLogoutClosed()),
//   onLogout: () => dispatch(logout()),
// });

export default connect(mapStateToProps)(ModalCongrats);
