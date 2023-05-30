'use client';

import { combineReducers, configureStore  } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/es/storage';

import pokemonReducer from './features/pokemon/pokemon.reducer';
import { rootEpic } from './root.epic';

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

const persistConfig = {
  key: 'poketeers',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);