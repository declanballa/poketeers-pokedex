/* eslint-disable @next/next/no-img-element */
'use client';

import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';
import { useSelector } from 'react-redux';

import styles from '@styles/details.module.scss';
import { PokemonType } from 'pokenode-ts';
import PokemonInfo from '@components/info/info';
import colors from '@styles/colors.module.scss';
import { useRouter } from 'next/navigation';
import Drawer from '@components/drawer/drawer';


const pokemonSandboxService = new PokemonSandboxService();

export default function Details() {
  const selected = useSelector(pokemonSandboxService.pokemonSelected);
  const selectedSpecies = useSelector(pokemonSandboxService.pokemonSpeciesSelected);
  const selectedEvolutionChain = useSelector(pokemonSandboxService.pokemonEvolutionChainSelected);
  const types = selected?.types?.map((type: PokemonType) => type.type.name);
  const router = useRouter();
  
  const handleOnClick = () => router.back();

  return (
    <div
      className={styles.main}
      style={{ backgroundColor: colors[`${types[0]}TypeBackground`] }}>
      <span
        className={styles.main__back}
        onClick={ handleOnClick }></span>
      <div className={styles.main__hero}>
        <div className={styles.main__hero_sprite}>
          <img alt={ selected.name } src={ selected.sprites.other['official-artwork'].front_default } />
        </div>
        <div className={styles.main__hero_info}>
          <PokemonInfo
            id={selected.id}
            name={selected.name}
            types={types} />
        </div>
      </div>
      <Drawer
        evolutionChain={ selectedEvolutionChain }
        pokemon={ selected }
        species={ selectedSpecies } />
    </div>
  );
}