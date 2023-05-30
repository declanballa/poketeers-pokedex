import styles from './search-input.module.scss';

export const SearchInput = ({ searchPokemon }) => {

  return (
    <div className={ styles.container }>
      <input
        className={ styles.container__input }
        onChange={ searchPokemon }
        type="search" />
    </div>
  );
};
