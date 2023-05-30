'use client';

import { Pokemon } from 'pokenode-ts';

import { RootState, store } from '@store/app.store';
import * as pokemonActions from '@store/features/pokemon/pokemon.action';


export class PokemonSandboxService {
  // Selectors
  pokemonList = (state: RootState): Pokemon[] => state.pokemon.list;
  pokemonSearched = (state: RootState): Pokemon[] => state.pokemon.searched;
  pokemonSelected = (state: RootState): Pokemon => state.pokemon.selected;
  pokemonLoading = (state: RootState): boolean => state.pokemon.loading;

  // Dispatchers
  getPokemonList = (offset: number, limit: number): void => {
    store.dispatch(pokemonActions.GetPokemonList(offset, limit));
  };

  getPokemonByName = (name: string): void => {
    store.dispatch(pokemonActions.GetPokemonByName(name));
  };

  clearSearchList = (): void => {
    store.dispatch(pokemonActions.ClearSearchedList());
  };

  setSelectedPokemon = (pokemon: Pokemon): void => {
    store.dispatch(pokemonActions.SetSelectedPokemon(pokemon));
  };
}
