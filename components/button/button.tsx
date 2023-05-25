'use client';

import cn from 'classnames';

import './button.scss';
import { store } from '@state/app.store';
import * as pokemonActions from '@state/actions/pokemon.action';

const getPokemonBySearchQuery = () => {
	store.dispatch(pokemonActions.GetPokemonBySearchQuery(''));
};

const Button = ({ type, labelText }) => {


	return (
		<div
			className={cn('button', `button--${type}`) }
			onClick={ getPokemonBySearchQuery }>
			<span className={ `button--${type}__label` }>{ labelText }</span>
		</div>
	);
};

export default Button;