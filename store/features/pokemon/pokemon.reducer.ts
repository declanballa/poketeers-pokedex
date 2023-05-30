'use client';

import { createReducer } from '@reduxjs/toolkit';

import * as pokemonActions from './pokemon.action';
import { Pokemon } from 'pokenode-ts';


export interface PokemonState {
	list: Pokemon[],
  searched: Pokemon[],
  selected: Pokemon,
	loading: boolean,
  error: unknown
}

const initialState: PokemonState = {
  list: [],
  searched: [],
  selected: undefined,
  loading: false,
  error: undefined
} as PokemonState;

const pokemonReducer =
  createReducer(initialState, (builder) => {
    builder
      // GET POKEMON LIST
      .addCase(
        pokemonActions.GetPokemonList,
        (state: PokemonState) => {
          state.loading = true;
          state.error = undefined;
        }
      )
      .addCase(
        pokemonActions.GetPokemonListSuccess,
        (state: PokemonState, action) => {
          state.loading = false;
          state.list = action.payload.pokemon;
        }
      )
      .addCase(
        pokemonActions.GetPokemonListFailure,
        (state: PokemonState, action) => {
          state.loading = false;
          state.error = action.payload.error;
        }
      )
      // GET POKEMON BY NAME
      .addCase(
        pokemonActions.GetPokemonByName,
        (state: PokemonState) => {
          state.loading = true;
          state.error = undefined;
        }
      )
      .addCase(
        pokemonActions.GetPokemonByNameSuccess,
        (state: PokemonState, action) => {
          state.loading = false;
          state.searched = [action.payload.pokemon, ...state.searched];
        }
      )
      .addCase(
        pokemonActions.GetPokemonByNameFailure,
        (state: PokemonState, action) => {
          state.loading = false;
          state.error = action.payload.error;
        }
      )
      // CLEAR SEARCHED LIST
      .addCase(
        pokemonActions.ClearSearchedList,
        (state: PokemonState) => {
          state.searched = [];
        }
      )
      // SET SELECTED POKEMON
      .addCase(
        pokemonActions.SetSelectedPokemon,
        (state: PokemonState, action) => {
          state.selected = action.payload.pokemon;
        }
      );
  });

export default pokemonReducer;