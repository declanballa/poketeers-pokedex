'use client';

import React from 'react';
import 'rxjs';

import { roboto } from 'public/fonts/roboto';
import { Providers } from '@store/provider';

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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
