/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import styleModalLogout from './ModalLogout.module.css';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';

const ModalLogout = ({ onClose }) => {
  return (
    <>
      <ModalBackdrop onClose={onClose}>
        <div className={styleModalLogout.modalSize}>
          <h2 className={styleModalLogout.modalTitleText}>
            Ви дійсно бажаєте вийти?
          </h2>

          <div className={styleModalLogout.prizeContainer} />
          <div className={styleModalLogout.buttonContainer}>
            <button className={styleModalLogout.point_amount}>
              <p className={styleModalLogout.point_amount_p}>Так</p>
            </button>
            <button onClick={onClose} className={styleModalLogout.point_amount}>
              <p className={styleModalLogout.point_amount_p}>Ні</p>
            </button>
          </div>
        </div>
      </ModalBackdrop>
    </>
  );
};

export default ModalLogout;
