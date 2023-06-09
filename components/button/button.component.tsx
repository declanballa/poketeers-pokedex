'use client';

import cn from 'classnames';

import styles from '@styles/button.module.scss';

export const Button = ({ labelText, onClick, type }) => {
  return (
    <div
      className={cn(styles.button, styles[`button--${type}`])}
      onClick={onClick}>
      <span className={styles[`button--${type}__label`]}>
        {labelText}
      </span>
    </div>
  );
};
