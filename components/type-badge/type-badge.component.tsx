'use client';

import { TypeIcon } from '@components/icon/icon.component';
import styles from '@styles/type-badge.module.scss';
import colors from '@styles/colors.module.scss';

export const TypeBadge = ({ types }: { types: string[]}) => {
  return (
    <>
      {
        types?.map((type: string) =>
          <div
            className={ styles.container }
            key={type}
            style={{ backgroundColor: colors[`${type}Type`]}}>
            <TypeIcon type={ type } />
            <div className={ styles.container__type }>{ type }</div>
          </div> 
        )
      }
    </>
  );
};
