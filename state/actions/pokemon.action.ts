import { createAction } from '@reduxjs/toolkit';
import { Pokemon } from 'models/pokemon.model';

export const GetPokemonBySearchQuery =
  createAction(
    '[POKEMON] Getting Pokemon by search query',
    function prepare(searchQuery: string) {
      return {
        payload: {
          searchQuery
        }
      };
    }
  );

export const GetPokemonBySearchQuerySuccess =
  createAction(
    '[POKEMON] Getting Pokemon by search query succeeded',
    function prepare(pokemon: Pokemon[]) {
      return {
        payload: {
          pokemon
        }
      };
    }
  );

export const GetPokemonBySearchQueryFailure =
  createAction(
    '[POKEMON] Getting Pokemon by search query failed'
  );
