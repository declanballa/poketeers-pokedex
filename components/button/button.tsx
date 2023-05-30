'use client';

import cn from 'classnames';

import styles from '@styles/button.module.scss';

const Button = ({ labelText, onClick, type }) => {
  return (
    <div
      className={cn(styles.button, `button--${type}`)}
      onClick={ onClick }>
      <span className={ `button--${type}__label` }>
        { labelText }
      </span>
    </div>
  );
};

export default Button;