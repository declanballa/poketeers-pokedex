import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import styles from '@styles/search-input.module.scss';

export const SearchInput = ({ searchPokemon }) => {
  const searchTextUpdate = new Subject<string>();

  searchTextUpdate.pipe(
    debounceTime(500),
    distinctUntilChanged()
  ).subscribe((searchText: string) => searchPokemon(searchText));

  const onSearchUpdate = (event) => {
    searchTextUpdate.next(event.target.value.toLowerCase());
  };

  return (
    <div className={ styles.container }>
      <input
        className={ styles.container__input }
        onChange={ onSearchUpdate }
        placeholder='Search...'
        type="search" />
    </div>
  );
};
