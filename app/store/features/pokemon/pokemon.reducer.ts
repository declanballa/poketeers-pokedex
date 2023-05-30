'use client';

import { createReducer } from '@reduxjs/toolkit';

import * as pokemonActions from './pokemon.action';
import { Pokemon } from 'pokenode-ts';


export interface PokemonState {
	list: Pokemon[],
  searched: Pokemon[],
	fetching: boolean,
  error: unknown
}

const initialState: PokemonState = {
  list: [],
  searched: [],
  fetching: false,
  error: undefined
} as PokemonState;

const pokemonReducer =
  createReducer(initialState, (builder) => {
    builder
      // GET POKEMON LIST
      .addCase(
        pokemonActions.GetPokemonList,
        (state: PokemonState) => {
          state.fetching = true;
          state.error = undefined;
        }
      )
      .addCase(
        pokemonActions.GetPokemonListSuccess,
        (state: PokemonState, action) => {
          state.fetching = false;
          state.list = action.payload.pokemon;
        }
      )
      .addCase(
        pokemonActions.GetPokemonListFailure,
        (state: PokemonState, action) => {
          state.fetching = false;
          state.error = action.payload.error;
        }
      )
      // GET POKEMON BY NAME
      .addCase(
        pokemonActions.GetPokemonByName,
        (state: PokemonState) => {
          state.fetching = true;
          state.error = undefined;
        }
      )
      .addCase(
        pokemonActions.GetPokemonByNameSuccess,
        (state: PokemonState, action) => {
          state.fetching = false;
          state.searched = [action.payload.pokemon, ...state.searched];
        }
      )
      .addCase(
        pokemonActions.GetPokemonByNameFailure,
        (state: PokemonState, action) => {
          state.fetching = false;
          state.error = action.payload.error;
        }
      );
  });

export default pokemonReducer;