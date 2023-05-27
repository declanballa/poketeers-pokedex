'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pokemon } from 'pokenode-ts';

import Button from '@components/button/button';
import Colors from '@styles/colors.module.scss';
import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';

const pokemonSandboxService = new PokemonSandboxService();

export default function Page() {
  const [pokemon, setPokemon] = useState([]);
  const records = useSelector(pokemonSandboxService.pokemonRecords);
  
  useEffect(() => {
    pokemonSandboxService.getPokemonBySearchQuery('bulbasaur');
  }, [/* Initial pokemon list load */]);
  
  useEffect(() => {
    setPokemon(records);
  }, [records]);
  
  return (
    <div onClick={() => pokemonSandboxService.getPokemonBySearchQuery('luxray')}>
      <h1 style={{ color: Colors.fireType }}>
        Poketeers! - Pokedex
      </h1>
      <Button
        labelText={ 'Search' }
        type={ 'primary' } />
      <br />
      <br />
      <br />
      <br />
      <Button
        labelText={ 'Cancel' }
        type={ 'secondary' } />
      <br />
      <br />
      <br />
      <br />
      {
        pokemon.length > 0 ?
          <ul>
            {
              pokemon.map((record: Pokemon) =>
                <li key={record.name}>
                  { record.name }
                </li>
              )
            }
          </ul> :
          null
      }
    </div>
  );
}
