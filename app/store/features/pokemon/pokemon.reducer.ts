'use client';

import { createReducer } from '@reduxjs/toolkit';

import * as pokemonActions from './pokemon.action';
import { Pokemon } from 'pokenode-ts';


export interface PokemonState {
	records: Pokemon[],
	fetching: boolean,
  error: unknown
}

const initialState: PokemonState = {
  records: [],
  fetching: false,
  error: undefined
} as PokemonState;

const pokemonReducer =
  createReducer(initialState, (builder) => {
    builder
      .addCase(
        pokemonActions.GetPokemonBySearchQuery,
        (state: PokemonState) => {
          state.fetching = true;
          state.error = undefined;
        }
      )
      .addCase(
        pokemonActions.GetPokemonBySearchQuerySuccess,
        (state: PokemonState, action) => {
          state.fetching = false;
          state.records = action.payload.pokemon;
        }
      )
      .addCase(
        pokemonActions.GetPokemonBySearchQueryFailure,
        (state: PokemonState, action) => {
          state.fetching = false;
          state.error = action.payload.error;
        }
      );
  });

export default pokemonReducer;