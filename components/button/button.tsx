'use client';

import cn from 'classnames';

import '@styles/button.scss';

const Button = ({ labelText, onClick, type }) => {
  return (
    <div
      className={cn('button', `button--${type}`)}
      onClick={ onClick }>
      <span className={ `button--${type}__label` }>
        { labelText }
      </span>
    </div>
  );
};

export default Button;