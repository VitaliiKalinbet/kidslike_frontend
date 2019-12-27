import { toast } from 'react-toastify';
import { submitPointsButton } from '../../services/api';
import { getToken } from '../auth/authSelectors';
import {
  startRemoveUserPointsAction,
  successRemoveUserPointsAction,
  errorRemoveUserPointsAction,
} from './awardsAction';
import { getUserId, getAwardsPoints, getUsersPoints } from './awardsSelector';
import { ModalCongratsClosed } from '../global/globalActions';

export const submitAwardOperation = () => (dispatch, getState) => {
  const token = getToken(getState());
  const userId = getUserId(getState());
  const awardsPoints = getAwardsPoints(getState());
  const userPoints = getUsersPoints(getState());
  const calcUserPoints = userPoints - awardsPoints;
  const data = { points: calcUserPoints };
  if (!token) return;
  dispatch(startRemoveUserPointsAction());
  submitPointsButton(userId, data, token)
    .then(res => {
      dispatch(successRemoveUserPointsAction(res.data.user.points));
      dispatch(ModalCongratsClosed());
    })
    .catch(() => {
      toast.error('🙈 Бали не списані. Спробуй ще раз!');
      dispatch(errorRemoveUserPointsAction());
    });
};

export const changeUserPointsOperation = data => (dispatch, getState) => {
  const token = getToken(getState());
  const userId = getUserId(getState());
  if (!token) return;
  dispatch(startRemoveUserPointsAction());
  submitPointsButton(userId, data, token)
    .then(res => {
      dispatch(successRemoveUserPointsAction(res.data.user.points));
      dispatch(ModalCongratsClosed());
    })
    .catch(() => {
      toast.error('🙈 Бали не списані. Спробуй ще раз!');
      dispatch(errorRemoveUserPointsAction());
    });
};
