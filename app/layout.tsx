'use client';

import React from 'react';
import 'rxjs';

import { roboto } from '@fonts/roboto';
import { Providers } from '@store/provider';

import styles from '@styles/layout.module.scss';
import Footer from '@components/footer/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html className={ roboto.className }>
      <body className={ styles.main }>
        <div className={ styles.container }>
          <Providers>
            { children }
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
