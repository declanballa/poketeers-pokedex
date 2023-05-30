'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pokemon } from 'pokenode-ts';

import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';
import { PokemonCard } from '@components/pokemon-card/pokemon-card';
import styles from '@styles/pokemon-list.module.scss';
import { SearchInput } from '@components/search-input/search-input';

const pokemonSandboxService = new PokemonSandboxService();

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const list = useSelector(pokemonSandboxService.pokemonList);
  const [pokemonSearched, setPokemonSearched] = useState([]);
  const searched = useSelector(pokemonSandboxService.pokemonSearched);
  
  useEffect(() => {
    pokemonSandboxService.getPokemonList(0, 9);
  }, [/* Initial pokemon list load */]);
  
  useEffect(() => {
    setPokemon(list);
    setPokemonSearched(searched);
  }, [list, searched]);

  const searchPokemon = (e) => {
    e.persist();

    setTimeout(() => {
      if (e.target.value !== '') {
        pokemonSandboxService.getPokemonByName(e.target.value.toLowerCase());
      }  
    }, 1000);
  };
  
  return (
    <div className={ styles.container }>
      <div className={ styles.search }>
        <h1>Poketeers! Pokedex</h1>
        <p>Search for Pokemon by name or using the National Pokedex number.</p>
        <SearchInput searchPokemon={ searchPokemon } />
      </div>
      <div className={ styles.list }>
        <ul>
          {
            pokemonSearched.map((record: Pokemon) =>
              <li key={record.name}>
                <PokemonCard
                  pokemon={record} />
              </li>
            )
          }
        </ul>
        <ul>
          {
            pokemon.map((record: Pokemon) =>
              <li key={record.name}>
                <PokemonCard
                  pokemon={record} />
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}
