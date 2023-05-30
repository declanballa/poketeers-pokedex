'use client';

import { catchError, map, switchMap,  } from 'rxjs/operators';
import { Pokemon } from 'pokenode-ts';
import { ofType } from 'redux-observable';
import { AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';

import * as pokemonActions from './pokemon.action';
import * as pokemonApiService from '@services/api/pokemon-api.service';

export const getPokemonListEpic =
  action$ =>
    action$.pipe(
      ofType(pokemonActions.GetPokemonList),
      switchMap((action: { type: string, payload: { offset: number, limit: number}}) =>
        pokemonApiService.getPokemonList(action.payload.offset, action.payload.limit).pipe(
          map((pokemon: Pokemon[]) =>
            pokemonActions.GetPokemonListSuccess(pokemon)),
          catchError((error: AjaxError) =>
            of(pokemonActions.GetPokemonListFailure(error)))
        )
      )
    );


export const getPokemonByNameEpic =
  action$ =>
    action$.pipe(
      ofType(pokemonActions.GetPokemonByName),
      switchMap((action: { type: string, payload: { name: string }}) =>
        pokemonApiService.getPokemonByName(action.payload.name).pipe(
          map((pokemon: Pokemon) =>
            pokemonActions.GetPokemonByNameSuccess(pokemon)),
          catchError((error: AjaxError) =>
            of(pokemonActions.GetPokemonByNameFailure(error)))
        )
      )
    );
