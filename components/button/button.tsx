'use client';
import cn from 'classnames';

import './button.scss';

const Button = ({ type, labelText }) => {
  return (
    <div className={cn('button', `button--${type}`) }>
      <span className={ `button--${type}__label` }>
        { labelText }
      </span>
    </div>
  );
};

export default Button;