'use client';

import { createAction } from '@reduxjs/toolkit';
import { Pokemon } from 'pokenode-ts';
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
      function prepare(name: string) {
        return {
          payload: {
            name
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