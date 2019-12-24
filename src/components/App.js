/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import routes from '../routes/routes';
// import Header from './Header/Header';
// import styles from './App.module.css';
import ModalBackdrop from './ModalBackdrop/ModalBackdrop';
import ModalCongrats from './ModalCongrats/ModalCongrats';
import ModalLogout from './ModalLogout/ModalLogout';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="App">
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>

        {isModalOpen && <ModalLogout onClose={this.closeModal} />}
      </div>
    );
  }
}
export default App;
