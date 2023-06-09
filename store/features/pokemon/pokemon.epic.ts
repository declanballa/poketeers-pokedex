'use client';

import { catchError, map, switchMap,  } from 'rxjs/operators';
import { EvolutionChain, Pokemon, PokemonSpecies } from 'pokenode-ts';
import { ofType } from 'redux-observable';
import { AjaxError } from 'rxjs/ajax';
import { concat, of } from 'rxjs';

import * as pokemonActions from './pokemon.action';
import * as pokemonApiService from 'services/api/pokemon-api.service';

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
      switchMap((action: { type: string, payload: { name: string, selected: boolean }}) =>
        pokemonApiService.getPokemonByName(action.payload.name).pipe(
          switchMap((pokemon: Pokemon) => {
            const actions = [];

            actions.push(pokemonActions.GetPokemonByNameSuccess(pokemon));

            if (action.payload.selected) {
              actions.push(pokemonActions.SetSelectedPokemon(pokemon));
            }

            return concat(actions);
          }),
          catchError((error: AjaxError) =>
            of(pokemonActions.GetPokemonByNameFailure(error)))
        )
      )
    );

export const setSelectedPokemonEpic =
  action$ =>
    action$.pipe(
      ofType(pokemonActions.SetSelectedPokemon),
      switchMap((action: { type: string, payload: { pokemon: Pokemon }}) =>
        pokemonApiService.getPokemonSpeciesById(action.payload.pokemon.id).pipe(
          switchMap((species: PokemonSpecies) => concat([
            pokemonActions.SetSelectedPokemonSuccess(species),
            pokemonActions.GetSelectedPokemonEvolutionChainByUrl(species.evolution_chain.url)
          ])),
          catchError((error: AjaxError) =>
            of(pokemonActions.SetSelectedPokemonFailure(error)))
        )
      )
    );

export const getSelectedPokemonEvolutionChainByUrlEpic =
  action$ =>
    action$.pipe(
      ofType(pokemonActions.GetSelectedPokemonEvolutionChainByUrl),
      switchMap((action: { type: string, payload: { url: string }}) =>
        pokemonApiService.getPokemonEvolutionChainByUrl(action.payload.url).pipe(
          map((chain: EvolutionChain) =>
            pokemonActions.GetSelectedPokemonEvolutionChainByUrlSuccess(chain)),
          catchError((error: AjaxError) =>
            of(pokemonActions.GetSelectedPokemonEvolutionChainByUrlFailure(error)))
        )
      )
    );
