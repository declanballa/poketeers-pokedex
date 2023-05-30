'use client';

import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '@styles/details.module.scss';


const pokemonSandboxService = new PokemonSandboxService();

export default function Details() {
  const [selectedPokemon, setSelectedPokemon] = useState({ name: 'none' });
  const selected = useSelector(pokemonSandboxService.pokemonSelected);

  useEffect(() => {
    setSelectedPokemon(selected);
  }, [selected]);

  return (
    <div className={ styles.main }>
      { selectedPokemon.name }
    </div>
  );
}