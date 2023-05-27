import { RootState, store } from '@store/app.store';
import * as pokemonActions from '@store/features/pokemon/pokemon.action';
import { Pokemon } from 'pokenode-ts';

export class PokemonSandboxService {
  // Selectors
  pokemonRecords = (state: RootState): Pokemon[] => state.pokemon.records;

  // Dispatchers
  getPokemonBySearchQuery = (searchQuery: string): void => {
    store.dispatch(pokemonActions.GetPokemonBySearchQuery(searchQuery));
  };

  
}
