import React from 'react';
// import PropTypes from 'prop-types';
import s from './CurrentDay.module.css';

const CurrentDay = () => (
  <div className={s.wrapper}>
    <h2 className={s.task}>Мoi завдання:</h2>
    <p className={s.day}>СЕРЕДА, 09.10.2019</p>
  </div>
);

export default CurrentDay;

// const CurrentDay = ({ day = new Date('2019-12-20T02:00:00.000Z') }) => {
//   // функция получения дня недели, из того что пришло из родителя

//   function getWeekDay(dayWeek) {
//     const days = [
//       'недiля',
//       'понедiлок',
//       'вiвторок',
//       'середа',
//       'четверг',
//       "п'ятниця",
//       'субота'
//     ];

//     return days[dayWeek.getDay()];
//   }
//   const dayWeek = day; // 19 октября 2019 года
//   const dayOfWeek = getWeekDay(dayWeek); // пятница

//   // получение даты в формате 16.12.2019
//   const dayW = Number(dayWeek.getDate());
//   const month = Number(dayWeek.getMonth()) + 1;
//   const year = Number(dayWeek.getFullYear());
//   const fullDate = `${dayW}.${month}.${year}`;

//   return (
//     <div className={s.wrapper}>
//       <h2 className={s.task}>Мoi завдання:</h2>
//       <p className={s.day}>
//         {dayOfWeek}, {fullDate}
//       </p>
//     </div>
//   );
// };

// // CurrentDay.propTypes = {
// //   day: PropTypes.object.isRequired,
// // };
// export default CurrentDay;
