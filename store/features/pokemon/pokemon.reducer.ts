'use client';

import { createReducer } from '@reduxjs/toolkit';
import { Pokemon } from 'pokenode-ts';

import * as pokemonActions from './pokemon.action';
import { SelectedPokemon } from '@models/selected-pokemon.model';

export interface PokemonState {
	list: Pokemon[],
  searched: Pokemon[],
  selected: SelectedPokemon,
	loading: boolean,
  error: unknown
}

const initialState: PokemonState = {
  list: [],
  searched: [],
  selected: {
    pokemon: undefined,
    species: undefined,
    evolutionChain: undefined
  } as SelectedPokemon,
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
          state.selected.pokemon = action.payload.pokemon;
          state.loading = true;
        }
      )
      .addCase(
        pokemonActions.SetSelectedPokemonSuccess,
        (state: PokemonState, action) => {
          state.selected.species = action.payload.species;
          state.loading = false;
        }
      )
      .addCase(
        pokemonActions.SetSelectedPokemonFailure,
        (state: PokemonState, action) => {
          state.loading = false;
          state.error = action.payload.error;
        }
      )
      // GET POKEMON EVOLUTION CHAIN
      .addCase(
        pokemonActions.GetSelectedPokemonEvolutionChainByUrl,
        (state: PokemonState) => {
          state.loading = true;
        }
      )
      .addCase(
        pokemonActions.GetSelectedPokemonEvolutionChainByUrlSuccess,
        (state: PokemonState, action) => {
          state.selected.evolutionChain = action.payload.chain;
          state.loading = false;
        }
      )
      .addCase(
        pokemonActions.GetSelectedPokemonEvolutionChainByUrlFailure,
        (state: PokemonState, action) => {
          state.loading = false;
          state.error = action.payload.error;
        }
      );
  });

export default pokemonReducer;
