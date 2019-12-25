/* eslint-disable no-unused-expressions */
export const getToken = store => store.auth.token;

export const getIsActive = (array, data) => {
  let planningValue;

  array.forEach(({ _id, days }) => {
    if (data.includes(_id)) {
      days.forEach(({ date, isActive }) => {
        if (data.includes(date)) {
          planningValue = { isActive };
        }
      });
    }
  });
  return planningValue;
};
