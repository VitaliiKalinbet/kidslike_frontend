import React from 'react';
import { connect } from 'react-redux';
import { NewTaskModalOpen } from '../../redux/global/globalActions';
import styles from '../../pages/PlanningPage/Planning.module.css';
import NewTaskModal from '../NewTaskModal/NewTaskModal';

// export default class AddCustomTask extends Component {
//   state = {
//     isOpenModal: false,
//   };

//   openModal = () => this.setState({ isOpenModal: true });

//   closeModal = () => this.setState({ isOpenModal: false });

//   render() {
//     const { isOpenModal } = this.state;

//     return (
//       <>
//         <p className={styles.hiddenText}>
//           Хочеш отримати більше призів - додай завдання
//           <span role="img" aria-label="	SMILING FACE WITH SMILING EYES">
//             &#128522;
//           </span>
//         </p>
//         <button
//           className={styles.addTaskBtn}
//           type="button"
//           onClick={this.openModal}
//         >
//           &#43;
//         </button>
//         {isOpenModal && <NewTaskModal onClose={this.closeModal} />}
//       </>
//     );
//   }
// }

// eslint-disable-next-line react/prop-types
const AddCustomTask = ({ isOpenModal, openModal }) => {
  return (
    <>
      <p className={styles.hiddenText}>
        Хочеш отримати більше призів - додай завдання
        <span role="img" aria-label="	SMILING FACE WITH SMILING EYES">
          &#128522;
        </span>
      </p>
      <button className={styles.addTaskBtn} type="button" onClick={openModal}>
        &#43;
      </button>
      {isOpenModal && <NewTaskModal />}
    </>
  );
};

const MSTP = store => ({
  isOpenModal: store.global,
});

const MDTP = dispatch => ({
  openModal: () => dispatch(NewTaskModalOpen),
});

console.log(MDTP);

export default connect(MSTP, MDTP)(AddCustomTask);
