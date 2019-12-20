import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import imageRobot from '../../assets/images/imageRobot.png';
import { ReactComponent as Cancel } from '../../assets/icons/close/cancel.svg';
import { ReactComponent as Edit } from '../../assets/icons/icon edit/edit-24px.svg';
import style from './NewTaskModal.module.css';
import createTaskOperation from '../../redux/newTask/newTaskOperations';

class NewTaskModal extends Component {
  overlayRef = createRef();

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {
    text: '',
    number: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleSubmit = e => {
    e.preventDefault();

    const { text, number } = this.state;

    this.props.onSave({ text, number });

    this.setState({ text: '', number: '' });
    const { onClose } = this.props;
    onClose();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleKeyPress = e => {
    const { onClose } = this.props;
    if (e.code !== 'Escape') return;
    onClose();
  };

  handleBackdropClick = e => {
    const { onClose } = this.props;
    const { current } = this.overlayRef;
    if (current && e.target !== current) {
      return;
    }
    onClose();
  };

  render() {
    const { text, number } = this.state;
    const { onClose } = this.props;

    return (
      <div
        onClick={this.handleBackdropClick}
        role="presentation"
        className={`${style.wrapper} ${style.overlay}`}
        ref={this.overlayRef}
      >
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
      </div>
    );
  }
}

const mapDispatchProps = dispatch => ({
  onSave: data => dispatch(createTaskOperation(data)),
});
export default connect(null, mapDispatchProps)(NewTaskModal);
