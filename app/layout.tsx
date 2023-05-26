'use client';

import React from 'react';
import { Provider } from 'react-redux';

import { roboto } from '../assets/fonts/roboto';
import { appStore } from 'state/app.store';

import styles from '@styles/layout.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={ roboto.className }
      lang="en">
      <body className={ styles.main }>
        <Provider store={ appStore }>
          { children }
        </Provider>
      </body>
    </html>
  );
}
