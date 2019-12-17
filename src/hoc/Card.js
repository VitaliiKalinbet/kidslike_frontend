import React from 'react';
import s from '../stylesheet/cardHOC.module.css';

const cardHOC = (
  task = {},
  headerComponent,
  interactiveComponent = null,
) => () => {
  return (
    <article>
      <img
        src={task.img}
        width="280"
        height="192"
        alt={task.title}
        className={s.card_img}
      />
      <div
        className={
          s.card_footer && (interactiveComponent ? s.card_footer_flex : '')
        }
      >
        <span>
          <headerComponent />
        </span>
        {interactiveComponent && (
          <span>
            <interactiveComponent />
          </span>
        )}
      </div>
    </article>
  );
};

export default cardHOC;
