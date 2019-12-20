/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import * as styleModalLogout from './ModalLogout.module.css';
import modalLogoutCat from '../../assets/images/Modal/modalLogoutCat.png';

export default class ModalLogout extends React.Component {
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
          <div className={styleModalLogout.modalSize}>
            <h2 className={styleModalLogout.modalTitleText}>
              Ви дійсно бажаєте вийти?
            </h2>
            <img
              className={styleModalLogout.imagePrize}
              src={modalLogoutCat}
              alt=""
            />
            <div className={styleModalLogout.prizeContainer} />
            <div className={styleModalLogout.buttonContainer}>
              <button className={styleModalLogout.point_amount}>
                <p className={styleModalLogout.point_amount_p}>Ні</p>
              </button>
              <button className={styleModalLogout.point_amount}>
                <p className={styleModalLogout.point_amount_p}>Так</p>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
