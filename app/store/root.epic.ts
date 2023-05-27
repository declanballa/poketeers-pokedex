'use client';

import { combineEpics } from 'redux-observable';

import { getPokemonEpic } from './features/pokemon/pokemon.epic';

export const rootEpic = combineEpics(
  getPokemonEpic
);
