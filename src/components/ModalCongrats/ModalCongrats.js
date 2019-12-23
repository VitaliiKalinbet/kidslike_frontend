/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import prizeImage1 from '../../assets/images/AwardsPage/1.png';
import prizeImage2 from '../../assets/images/AwardsPage/2.png';
import catTop from '../../assets/images/Modal/catTransparent.png';
import styleModalLogout from '../ModalLogout/ModalLogout.module.css';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import AwardsSubmitButton from '../AwardsSubmitButton/AwardsSubmitButton';
import styleModalCongrats from './ModalCongrats.module.css';

const ModalCongrats = ({ onClose }) => {
  return (
    <>
      <ModalBackdrop onClose={onClose}>
        <div className={styleModalCongrats.modalSize}>
          <img className={styleModalCongrats.catTop} src={catTop} alt="" />
          <h2 className={styleModalCongrats.modalTitleText}>
            Вітаємо! Ти отримуєш:
          </h2>
          <div className={styleModalCongrats.prizeContainer}>
            {/* item open */}

            <div className={styleModalCongrats.prizeContainerItem}>
              <img
                className={styleModalCongrats.imagePrize}
                src={prizeImage1}
                alt=""
              />
              <p className={styleModalCongrats.prizeContainerItemText}>
                75 балів
              </p>
            </div>
            {/* item close */}
            {/* item open */}

            <div className={styleModalCongrats.prizeContainerItem}>
              <img
                className={styleModalCongrats.imagePrize}
                src={prizeImage2}
                alt=""
              />
              <p className={styleModalCongrats.prizeContainerItemText}>
                75 балів
              </p>
            </div>

            {/* item close */}
          </div>

          <p className={styleModalCongrats.prizeContainerItemText}>
            Сумарна кількість балів: 150
          </p>

          <div className={styleModalCongrats.buttonContainer}>
            {/* <button className={styleModalLogout.point_amount_long}>
              <p className={styleModalLogout.point_amount_p}>Підтвердити!</p>
            </button> */}
            <AwardsSubmitButton />
          </div>
        </div>
      </ModalBackdrop>
    </>
  );
};

export default ModalCongrats;
