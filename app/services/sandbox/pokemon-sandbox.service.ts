'use client';

import { RootState, store } from '@store/app.store';
import * as pokemonActions from '@store/features/pokemon/pokemon.action';
import { Pokemon } from 'pokenode-ts';

export class PokemonSandboxService {
  // Selectors
  pokemonList = (state: RootState): Pokemon[] => state.pokemon.list;
  pokemonSearched = (state: RootState): Pokemon[] => state.pokemon.searched;

  // Dispatchers
  getPokemonList = (offset: number, limit: number): void => {
    store.dispatch(pokemonActions.GetPokemonList(offset, limit));
  };

  getPokemonByName = (name: string): void => {
    store.dispatch(pokemonActions.GetPokemonByName(name));
  };
}
