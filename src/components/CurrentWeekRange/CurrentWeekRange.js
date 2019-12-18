import React from 'react';
// import PropTypes from 'prop-types';
import s from './CurrentWeekRange.module.css';

const CurrentWeekRange = () => (
  <div className={s.wrapper}>
    <p className={s.week}>Тиждень: 7-13 жовтня</p>
  </div>
);

export default CurrentWeekRange;
// const CurrentWeekRange = ({
//   dayFrom = new Date('2019-12-16T02:00:00.000Z'),
//   dayTo = new Date('2019-12-22T22:59:59.000Z'),
// }) => {
//   // функция получения дней недели (от и до какой даты) из того, что в сторе
//   const dateStart = dayFrom.getDate();
//   const dateTo = dayTo.getDate();

//   // функция получения месяца, из того что в сторе
//   function getThisMonth(dayFrom) {
//     const monthes = [
//       'сiчень',
//       'лютий',
//       'березень',
//       'квiтень',
//       'травень',
//       'червень',
//       'липень',
//       'серпень',
//       'вересень',
//       'жовтень',
//       'листопад',
//       'грудень',
//     ];

//     return monthes[dayFrom.getMonth()];
//   }
//   const month = getThisMonth(dayFrom);

//   return (
//     <div className={s.wrapper}>
//       <p className={s.week}>
//         Тиждень: {dateStart}-{dateTo} {month}
//       </p>
//     </div>
//   );
// };

// // CurrentWeekRange.propTypes = {
// //   dateStart: PropTypes.object.isRequired,
// //   dateTo: PropTypes.object.isRequired,
// // };
// export default CurrentWeekRange;
