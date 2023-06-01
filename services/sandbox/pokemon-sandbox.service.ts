'use client';

import { EvolutionChain, Pokemon, PokemonSpecies } from 'pokenode-ts';

import { RootState, store } from '@store/app.store';
import * as pokemonActions from '@store/features/pokemon/pokemon.action';


export class PokemonSandboxService {
  // Selectors
  pokemonList = (state: RootState): Pokemon[] => state.pokemon.list;
  pokemonSearched = (state: RootState): Pokemon[] => state.pokemon.searched;
  pokemonSelected = (state: RootState): Pokemon => state.pokemon.selected.pokemon;
  pokemonSpeciesSelected = (state: RootState): PokemonSpecies => state.pokemon.selected.species;
  pokemonEvolutionChainSelected = (state: RootState): EvolutionChain => state.pokemon.selected.evolutionChain;
  pokemonLoading = (state: RootState): boolean => state.pokemon.loading;

  // Dispatchers
  getPokemonList = (offset: number, limit: number): void => {
    store.dispatch(pokemonActions.GetPokemonList(offset, limit));
  };

  getPokemonByName = (name: string, selected = false): void => {
    store.dispatch(pokemonActions.GetPokemonByName(name, selected));
  };

  clearSearchList = (): void => {
    store.dispatch(pokemonActions.ClearSearchedList());
  };

  setSelectedPokemon = (pokemon: Pokemon): void => {
    store.dispatch(pokemonActions.SetSelectedPokemon(pokemon));
  };
}
