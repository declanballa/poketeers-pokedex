'use client';

import { combineReducers, configureStore  } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

import pokemonReducer from './features/pokemon/pokemon.reducer';
import { rootEpic } from './root.epic';

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
