import { map, switchMap,  } from 'rxjs/operators';
import * as pokemonActions from '../actions/pokemon.action';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { Pokemon } from 'models/pokemon.model';


export const getPokemonEpic =
  action$ =>
    action$.pipe(
      ofType(pokemonActions.GetPokemonBySearchQuery),
      switchMap(() =>
        ajax.getJSON('https://pokeapi.co/api/v2/pokemon-species').pipe(
          map((response: Pokemon[]) => pokemonActions.GetPokemonBySearchQuerySuccess(response))
        )
      )
    );
