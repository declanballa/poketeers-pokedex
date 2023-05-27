import { Pokemon, PokemonClient } from 'pokenode-ts';
import { from, Observable  } from 'rxjs';


export function getPokemonByName(searchQuery: string): Observable<Pokemon> {
  const api = new PokemonClient();

  return from(api.getPokemonByName(searchQuery));
}
