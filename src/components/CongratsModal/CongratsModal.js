/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import * as styleCongratsModal from './CongratsModal.module.css';
import prizeImage1 from '../../assets/images/AwardsPage/1.png';
import prizeImage2 from '../../assets/images/AwardsPage/2.png';
import catTop from '../../assets/images/AwardsPage/catTransparent.png';
import * as styleModalLogout from '../ModalLogout/ModalLogout.module.css';

export default class CongratsModal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className={styleCongratsModal.modalPrizeSize}>
            <img className={styleCongratsModal.catTop} src={catTop} alt="" />
            <h2 className={styleCongratsModal.modalTitleText}>
              Вітаємо! Ти отримуєш:
            </h2>
            <div className={styleCongratsModal.prizeContainer}>
              {/* item open */}

              <div className={styleCongratsModal.prizeContainerItem}>
                <img
                  className={styleCongratsModal.imagePrize}
                  src={prizeImage1}
                  alt=""
                />
                <p className={styleCongratsModal.prizeContainerItemText}>
                  75 балів
                </p>
              </div>
              {/* item close */}
              {/* item open */}

              <div className={styleCongratsModal.prizeContainerItem}>
                <img
                  className={styleCongratsModal.imagePrize}
                  src={prizeImage2}
                  alt=""
                />
                <p className={styleCongratsModal.prizeContainerItemText}>
                  75 балів
                </p>
              </div>

              {/* item close */}
            </div>

            <p className={styleCongratsModal.prizeContainerItemText}>
              Сумарна кількість балів: 150
            </p>

            <div className={styleCongratsModal.buttonContainer}>
              <button className={styleModalLogout.point_amount_long}>
                <p className={styleModalLogout.point_amount_p}>Підтвердити!</p>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
