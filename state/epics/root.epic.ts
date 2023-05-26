import { combineEpics } from 'redux-observable';

import { getPokemonEpic } from './pokemon.epic';

export const rootEpic = combineEpics(
  getPokemonEpic
);
