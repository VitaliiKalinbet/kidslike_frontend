import React from 'react';
import styles from './ContactsPages.module.css';
import ContactPhoto from '../../assets/images/contact-photo.png';

const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <p className={styles.contacts_main_tittle}>Наша команда</p>{' '}
      <p className={styles.contacts_second_tittle}>
        Завжди готові до нових викликів!
      </p>
      <ul className={styles.contacts_all_card}>
        <li className={styles.contacts_card}>
          <img className={styles.contacts_img} src={ContactPhoto} alt="" />
          <p className={styles.contacts_name}>Name and Surname</p>
          <p className={styles.contacts_possition}>Front-End Developer</p>
          <p className={styles.contacts_possition_describe}>
            Lorem Ipsum является стандартной для текстов на латиниц
          </p>
        </li>
        <li className={styles.contacts_card}>
          <img className={styles.contacts_img} src={ContactPhoto} alt="" />
          <p className={styles.contacts_name}>Name and Surname</p>
          <p className={styles.contacts_possition}>Front-End Developer</p>
          <p className={styles.contacts_possition_describe}>
            Lorem Ipsum является стандартной для текстов на латиниц
          </p>
        </li>
        <li className={styles.contacts_card}>
          <img
            className={styles.contacts_img}
            src={ContactPhoto}
            alt="team_photo"
          />
          <p className={styles.contacts_name}>Name and Surname</p>
          <p className={styles.contacts_possition}>Front-End Developer</p>
          <p className={styles.contacts_possition_describe}>
            Lorem Ipsum является стандартной для текстов на латиниц
          </p>
        </li>
        <li className={styles.contacts_card}>
          <img className={styles.contacts_img} src={ContactPhoto} alt="" />
          <p className={styles.contacts_name}>Name and Surname</p>
          <p className={styles.contacts_possition}>Front-End Developer</p>
          <p className={styles.contacts_possition_describe}>
            Lorem Ipsum является стандартной для текстов на латиниц
          </p>
        </li>
        <li className={styles.contacts_card}>
          <img className={styles.contacts_img} src={ContactPhoto} alt="" />
          <p className={styles.contacts_name}>Name and Surname</p>
          <p className={styles.contacts_possition}>Front-End Developer</p>
          <p className={styles.contacts_possition_describe}>
            Lorem Ipsum является стандартной для текстов на латиниц
          </p>
        </li>
        <li className={styles.contacts_card}>
          <img className={styles.contacts_img} src={ContactPhoto} alt="" />
          <p className={styles.contacts_name}>Name and Surname</p>
          <p className={styles.contacts_possition}>Front-End Developer</p>
          <p className={styles.contacts_possition_describe}>
            Lorem Ipsum является стандартной для текстов на латиниц
          </p>
        </li>
        <li className={styles.contacts_card}>
          <img className={styles.contacts_img} src={ContactPhoto} alt="" />
          <p className={styles.contacts_name}>Name and Surname</p>
          <p className={styles.contacts_possition}>Front-End Developer</p>
          <p className={styles.contacts_possition_describe}>
            Lorem Ipsum является стандартной для текстов на латиниц
          </p>
        </li>
        <li className={styles.contacts_card}>
          <img className={styles.contacts_img} src={ContactPhoto} alt="" />
          <p className={styles.contacts_name}>Name and Surname</p>
          <p className={styles.contacts_possition}>Front-End Developer</p>
          <p className={styles.contacts_possition_describe}>
            Lorem Ipsum является стандартной для текстов на латиниц
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ContactsPage;
