import shortid from 'shortid';
import Sweets from '../assets/images/AwardsPage/1.jpg';
import Cinema from '../assets/images/AwardsPage/2.jpg';
import Gift from '../assets/images/AwardsPage/3.jpg';
import Pizza from '../assets/images/AwardsPage/4.jpg';
import Party from '../assets/images/AwardsPage/5.jpg';
import McDonalds from '../assets/images/AwardsPage/6.jpg';
import desire from '../assets/images/AwardsPage/7.jpg';
import Skates from '../assets/images/AwardsPage/8.jpg';

const awardsCards = [
  {
    title: 'Солодощі',
    imgName: Sweets,
    taskPoints: 40,
    id: shortid.generate(),
    isSelected: true,
  },
  {
    title: 'Похід у кіно',
    imgName: Cinema,
    taskPoints: 90,
    id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Подарунок',
    imgName: Gift,
    taskPoints: 100,
    id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Вечір піцци',
    imgName: Pizza,
    taskPoints: 80,
    id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Вечірка з друзями',
    imgName: Party,
    taskPoints: 120,
    id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Похід у Макдональдс',
    imgName: McDonalds,
    taskPoints: 80,
    id: shortid.generate(),
    isSelected: true,
  },
  {
    title: 'Бажання',
    imgName: desire,
    taskPoints: 200,
    id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Похід на ковзанку',
    imgName: Skates,
    taskPoints: 100,
    id: shortid.generate(),
    isSelected: false,
  },
];

export default awardsCards;
