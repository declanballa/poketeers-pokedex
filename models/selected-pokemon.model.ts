import { EvolutionChain, Pokemon, PokemonSpecies } from 'pokenode-ts';

export interface SelectedPokemon {
  pokemon: Pokemon,
  species: PokemonSpecies,
  evolutionChain: EvolutionChain
}
