'use client';

import { createAction } from '@reduxjs/toolkit';
import { EvolutionChain, Pokemon, PokemonSpecies } from 'pokenode-ts';
import { AjaxError } from 'rxjs/ajax';

export const GetPokemonList =
  createAction(
    '[POKEMON] Getting Pokemon list',
    function prepare(offset, limit) {
      return {
        payload: {
          offset, limit
        }
      };
    }
  );

export const GetPokemonListSuccess =
  createAction(
    '[POKEMON] Getting Pokemon list succeeded',
    function prepare(pokemon: Pokemon[]) {
      return {
        payload: {
          pokemon
        }
      };
    }
  );

export const GetPokemonListFailure =
  createAction(
    '[POKEMON] Getting Pokemon list failed',
    function prepare(error: AjaxError) {
      return {
        payload: {
          error
        }
      };
    }
  );

export const GetPokemonByName =
  createAction(
    '[POKEMON] Getting Pokemon by name',
    function prepare(name: string, selected = false) {
      return {
        payload: {
          name, selected
        }
      };
    }
  );

export const GetPokemonByNameSuccess =
  createAction(
    '[POKEMON] Getting Pokemon by name succeeded',
    function prepare(pokemon: Pokemon) {
      return {
        payload: {
          pokemon
        }
      };
    }
  );

export const GetPokemonByNameFailure =
  createAction(
    '[POKEMON] Getting Pokemon by name failed',
    function prepare(error: AjaxError) {
      return {
        payload: {
          error
        }
      };
    }
  );

export const ClearSearchedList =
  createAction(
    '[POKEMON] Clearing Searched List'
  );


export const SetSelectedPokemon =
  createAction(
    '[POKEMON] Setting selected pokemon',
    function prepare(pokemon: Pokemon) {
      return {
        payload: {
          pokemon
        }
      };
    }
  );

export const SetSelectedPokemonSuccess =
  createAction(
    '[POKEMON] Setting selected pokemon succeeded',
    function prepare(species: PokemonSpecies) {
      return {
        payload: {
          species
        }
      };
    }
  );

export const SetSelectedPokemonFailure =
  createAction(
    '[POKEMON] Getting Pokemon failed',
    function prepare(error: AjaxError) {
      return {
        payload: {
          error
        }
      };
    }
  );

export const GetSelectedPokemonEvolutionChainByUrl =
  createAction(
    '[POKEMON] Getting Pokemon evolution chain by url',
    function prepare(url: string) {
      return {
        payload: {
          url
        }
      };
    }
  );

export const GetSelectedPokemonEvolutionChainByUrlSuccess =
  createAction(
    '[POKEMON] Getting Pokemon evolution chain by url succeeded',
    function prepare(chain: EvolutionChain) {
      return {
        payload: {
          chain
        }
      };
    }
  );

export const GetSelectedPokemonEvolutionChainByUrlFailure =
  createAction(
    '[POKEMON] Getting Pokemon evolution chain by url failed',
    function prepare(error: AjaxError) {
      return {
        payload: {
          error
        }
      };
    }
  );