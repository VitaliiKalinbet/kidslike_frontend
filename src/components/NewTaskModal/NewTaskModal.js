import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { css } from 'react-toastify';
// import { Slide, ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
// import 'react-toastify/dist/ReactToastify.minimal.css';

// import 'react-toastify/dist/ReactToastify.css';

import imageRobot from '../../assets/images/imageRobot.png';
import { ReactComponent as Cancel } from '../../assets/icons/close/cancel.svg';
import { ReactComponent as Edit } from '../../assets/icons/icon edit/edit-24px.svg';
import style from './NewTaskModal.module.css';
import createTaskOperation from '../../redux/newTask/newTaskOperations';

// const notify = () =>
//   toast.error('Success Notification !', {
//     autoClose: 2000,
//     position: toast.POSITION.RIGHT,
//   });

class NewTaskModal extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {
    text: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { text, number } = this.state;
    // const { onClose } = this.props;

    this.props.onSave({ text, number });
    // notify();
    this.setState({ text: '', number: '' });
  };

  render() {
    const { text, number } = this.state;
    const { onClose } = this.props;

    // const { closeModal } = this.props;
    return (
      <div onClick={onClose} role="presentation" className={style.overlay}>
        <div className={style.taskModal}>
          <div className={style.taskImage}>
            <button type="button" className={style.taskCloseButton}>
              {' '}
              <Cancel onClick={onClose} />{' '}
            </button>
            <img src={imageRobot} alt="robot" />
          </div>
          <div className={style.taskForm}>
            <form className={style.form} onSubmit={this.handleSubmit}>
              <Edit className={style.taskIconEdit} />
              <input
                className={style.taskInput}
                placeholder="Додати завдання..."
                type="text"
                name="text"
                value={text}
                onChange={this.handleChange}
                required
              />
              <Edit className={style.gradeIconEdit} />
              <input
                className={style.taskPoints}
                type="number"
                value={number}
                name="number"
                min="1"
                max="100"
                placeholder="Додати бали..."
                onChange={this.handleChange}
                required
              />
              <button className={style.taskSubmitButton} type="submit">
                Ок
              </button>
            </form>
          </div>
        </div>
        {/* <ToastContainer transition={Slide} draggablePercent={60} /> */}
      </div>
    );
  }
}

const mapDispatchProps = dispatch => ({
  onSave: data => dispatch(createTaskOperation(data)),
});
export default connect(null, mapDispatchProps)(NewTaskModal);
