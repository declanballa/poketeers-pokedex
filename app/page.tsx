import React from 'react';

import Colors from '@styles/colors.module.scss';
import Button from '@components/button/button';

export default function Page() {
  return (
    <div>
      <h1 style={{ color: Colors.fireType }}>
        Poketeers! - Pokedex
      </h1>
      <Button
        labelText={ 'Search' }
        type={ 'primary' } />
      <br />
      <br />
      <br />
      <br />
      <Button
        labelText={ 'Cancel' }
        type={ 'secondary' } />
    </div>
  );
}
