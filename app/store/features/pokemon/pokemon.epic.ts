'use client';

import { catchError, map, switchMap,  } from 'rxjs/operators';
import * as pokemonActions from './pokemon.action';
import { ofType } from 'redux-observable';
import { AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import * as pokemonApiService from './pokemon-api.service';
import { Pokemon } from 'pokenode-ts';

export const getPokemonEpic =
  action$ =>
    action$.pipe(
      ofType(pokemonActions.GetPokemonBySearchQuery),
      switchMap((action: { type: string; payload: { searchQuery: string }}) =>
        pokemonApiService.getPokemonByName(action.payload.searchQuery).pipe(
          map((pokemon: Pokemon) =>
            pokemonActions.GetPokemonBySearchQuerySuccess([pokemon])),
          catchError((error: AjaxError) =>
            of(pokemonActions.GetPokemonBySearchQueryFailure(error)))
        )
      )
    );
