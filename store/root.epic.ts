'use client';

import { combineEpics } from 'redux-observable';

import { getPokemonByNameEpic, getPokemonListEpic, getSelectedPokemonEvolutionChainByUrlEpic, setSelectedPokemonEpic, } from './features/pokemon/pokemon.epic';

export const rootEpic = combineEpics(
  getPokemonByNameEpic,
  getPokemonListEpic,
  setSelectedPokemonEpic,
  getSelectedPokemonEvolutionChainByUrlEpic
);
