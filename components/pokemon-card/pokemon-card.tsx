/* eslint-disable @next/next/no-img-element */
import { Pokemon, PokemonType } from 'pokenode-ts';

import { TypeBadge } from '@components/type-badge/type-badge';
import styles from '@styles/pokemon-card.module.scss';
import colors from '@styles/colors.module.scss';

export const PokemonCard = ({ pokemon, setSelectedPokemon }: { pokemon: Pokemon, setSelectedPokemon }) => {
  const types = pokemon.types.map((type: PokemonType) => type.type.name);
  let numberPrefix = '#';

  if (pokemon.id < 10) {
    numberPrefix = '#00';
  } else if (pokemon.id > 9 && pokemon.id < 100) {
    numberPrefix = '#0';
  }

  const selectedPokemon = () => {
    setSelectedPokemon(pokemon);
  };
  
  return (
    <div
      className={ styles.container }
      onClick={ selectedPokemon }
      style={{ backgroundColor: colors[`${types[0]}TypeBackground`]}}>
      <div className={ styles.container__info }>
        <div className={ styles.container__info_number}>
          { `${numberPrefix}${pokemon.id}` }
        </div>
        <div className={ styles.container__info_name}>
          { pokemon.name }
        </div>
        <TypeBadge types={ types }></TypeBadge>
      </div>
      <div className={ styles.container__image }>
        <img alt={ pokemon.name } src={ pokemon.sprites.other['official-artwork'].front_default } />
      </div>
    </div>
  );
};
