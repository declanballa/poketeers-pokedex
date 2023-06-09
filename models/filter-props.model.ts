import { PokemonType } from 'enums/pokemon-type';
import { SortType } from 'enums/sort-type';
import { Pokedex } from 'pokenode-ts';

export interface FilterProps {
  types: PokemonType[]; // default: []
  sort: SortType[];     // default: AscendingId
  pokdex: Pokedex;      // default: National
}