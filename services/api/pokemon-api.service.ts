'use client';

import { EvolutionChain, NamedAPIResource, NamedAPIResourceList, Pokemon, PokemonSpecies } from 'pokenode-ts';
import { forkJoin, map, Observable, switchMap  } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const apiBaseUrl = 'https://pokeapi.co/api/v2';

// Public functions exposed to epic:
export const getPokemonList = (offset = 0, limit = 9): Observable<Pokemon[]> => {
  const pokemonAPIResources$ = getPokemonNamedAPIResources(offset, limit);

  return pokemonAPIResources$.pipe(
    switchMap((resources: NamedAPIResource[]) => 
      forkJoin(resources.map((resource: NamedAPIResource) => 
        getPokemonDetailsByNamedAPIResource(resource)
      ))
    )
  );
};

export const getPokemonByName = (name: string): Observable<Pokemon> => {
  const url = `${apiBaseUrl}/pokemon/${name}`;

  return ajax.getJSON<Pokemon>(url).pipe();
};

export const getPokemonSpeciesById = (id: number): Observable<PokemonSpecies> => {
  const url = `${apiBaseUrl}/pokemon-species/${id}`;

  return ajax.getJSON<PokemonSpecies>(url).pipe();
};

export const getPokemonEvolutionChainByUrl = (url: string): Observable<EvolutionChain> => {
  return ajax.getJSON<EvolutionChain>(url).pipe();
};

// internal functions for calling api and forming data:
const getPokemonNamedAPIResources = (offset = 0, limit = 5): Observable<NamedAPIResource[]> => {
  const url = `${apiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`;

  return ajax.getJSON(url).pipe(
    map((response: NamedAPIResourceList) => response.results)
  );
};

const getPokemonDetailsByNamedAPIResource = (resource: NamedAPIResource): Observable<Pokemon> => {
  return ajax.getJSON(resource.url);
};
