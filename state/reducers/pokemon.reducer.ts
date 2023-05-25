import { createReducer } from '@reduxjs/toolkit';

import * as pokemonActions from '../actions/pokemon.action';
import { Pokemon } from 'models/pokemon.model';


export interface PokemonState {
	records: Pokemon[],
	fetching: boolean
}

const initialState: PokemonState = {
	records: [],
	fetching: false
} as PokemonState;

const pokemonReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(
			pokemonActions.GetPokemonBySearchQuery,
			(state: PokemonState) => {
				state.fetching = true;
			}
		)
		.addCase(
			pokemonActions.GetPokemonBySearchQuerySuccess,
			(state: PokemonState, action) => {
				state.fetching = false;
				state.records = action.payload.pokemon;
			}
		)
		.addCase(
			pokemonActions.GetPokemonBySearchQueryFailure,
			(state: PokemonState) => {
				state.fetching = false;
			}
		);
});

export default pokemonReducer;