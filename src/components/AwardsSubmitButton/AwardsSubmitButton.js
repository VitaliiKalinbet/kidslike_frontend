import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './AwardsSubmitButton.module.css';
import { ModalCongratsOpen } from '../../redux/global/globalActions';

const AwardsSubmitButton = ({ isOpen }) => {
  return (
    <div className={style.present_button}>
      <button onClick={isOpen} className={style.button} type="submit">
        ОК
      </button>
    </div>
  );
};
AwardsSubmitButton.propTypes = {
  isOpen: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  isOpen: () => dispatch(ModalCongratsOpen()),
});
export default connect(null, mapDispatchToProps)(AwardsSubmitButton);
