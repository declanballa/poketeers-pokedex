'use client';

import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '@styles/details.module.scss';
import { PokemonType } from 'pokenode-ts';
import PokemonInfo from '@components/pokemon-info/pokemon-info';
import colors from '@styles/colors.module.scss';


const pokemonSandboxService = new PokemonSandboxService();

export default function Details() {
  const [selectedPokemon, setSelectedPokemon] = useState({ id: 1, name: 'none', types: [] });
  const selected = useSelector(pokemonSandboxService.pokemonSelected);

  const types = selectedPokemon.types.map((type: PokemonType) => type.type.name);

  useEffect(() => {
    setSelectedPokemon(selected);
  }, [selected]);

  return (
    <div className={ styles.main }
      style={{ backgroundColor: colors[`${types[0]}TypeBackground`]}}>
      <PokemonInfo 
        id={ selectedPokemon.id}
        name={ selectedPokemon.name}
        types={ types } />
    </div>
  );
}