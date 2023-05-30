'use client';

import { combineEpics } from 'redux-observable';

import { getPokemonByNameEpic, getPokemonListEpic,  } from './features/pokemon/pokemon.epic';

export const rootEpic = combineEpics(
  getPokemonByNameEpic,
  getPokemonListEpic
);
