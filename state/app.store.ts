import { combineReducers, configureStore  } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { createWrapper } from 'next-redux-wrapper';

import pokemonReducer from './reducers/pokemon.reducer';
import { rootEpic } from './epics/root.epic';

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { pokemon: PokemonState }
export type AppDispatch = typeof store.dispatch;

// For Next.js, we need to wrap the store to inject it into the root layout:
export const wrapper = createWrapper(() => store);

// Lastly, expose the store for next.js to use as a prop in the provider component:
export const appStore = store;



