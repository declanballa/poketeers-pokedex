/* eslint-disable @next/next/no-img-element */
import { Pokemon, PokemonType } from 'pokenode-ts';

import PokemonInfo from '@components/info/info.component';
import styles from '@styles/pokemon-card.module.scss';
import colors from '@styles/colors.module.scss';

export const PokemonCard = ({ pokemon, setSelectedPokemon }: { pokemon: Pokemon, setSelectedPokemon }) => {
  const types = pokemon.types?.map((type: PokemonType) => type.type.name) || [];

  const selectedPokemon = () => {
    setSelectedPokemon(pokemon);
  };
  
  return (
    <div
      className={ styles.container }
      onClick={ selectedPokemon }
      style={{ backgroundColor: colors[`${types[0]}TypeBackground`]}}>
      <PokemonInfo 
        id={ pokemon.id}
        name={ pokemon.name}
        types={ types } />
      <div className={ styles.container__image }>
        <img alt={ pokemon.name } src={ pokemon.sprites?.other['official-artwork'].front_default } />
      </div>
    </div>
  );
};

