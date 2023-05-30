'use client';

import { NamedAPIResource, NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import { forkJoin, map, Observable, switchMap  } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const apiBaseUrl = 'https://pokeapi.co/api/v2';

// Public functions exposed to epic:
export function getPokemonList(offset = 0, limit = 9): Observable<Pokemon[]> {
  const pokemonAPIResources$ = getPokemonNamedAPIResources(offset, limit);

  return pokemonAPIResources$.pipe(
    switchMap((resources: NamedAPIResource[]) => 
      forkJoin(resources.map((resource: NamedAPIResource) => 
        getPokemonDetailsByNamedAPIResource(resource)
      ))
    )
  );
}

export function getPokemonByName(name: string): Observable<Pokemon> {
  const url = `${apiBaseUrl}/pokemon/${name}`;

  return ajax.getJSON<Pokemon>(url).pipe();
}

// export function getPokemonByName(name: string): Observable<Pokemon> {

//   return of({} as Pokemon);
// }

// internal functions for calling api and forming data:
function getPokemonNamedAPIResources(offset = 0, limit = 5): Observable<NamedAPIResource[]> {
  const url = `${apiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`;

  return ajax.getJSON(url).pipe(
    map((response: NamedAPIResourceList) => response.results)
  );
}

function getPokemonDetailsByNamedAPIResource(resource: NamedAPIResource): Observable<Pokemon> {
  return ajax.getJSON(resource.url);
}
