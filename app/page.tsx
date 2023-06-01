'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Pokemon } from 'pokenode-ts';

import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';
import { PokemonCard } from '@components/card/card';
import { SearchInput } from '@components/search-input/search-input';
import Button from '@components/button/button';
import styles from '@styles/list.module.scss';

const pokemonSandboxService = new PokemonSandboxService();

export default function List() {
  const list = useSelector(pokemonSandboxService.pokemonList);
  const searched = useSelector(pokemonSandboxService.pokemonSearched);
  const router = useRouter();
  
  useEffect(() => {
    pokemonSandboxService.getPokemonList(0, 9);
  }, [/* Initial pokemon list load */]);

  const searchPokemon = (searchString: string) => {
    if (searchString !== '') {
      pokemonSandboxService.getPokemonByName(searchString);
    }  
  };

  const setSelectPokemon = (pokemon: Pokemon) => {
    pokemonSandboxService.setSelectedPokemon(pokemon);
    router.push('/details');
  };

  const clearSearchHistory = () => pokemonSandboxService.clearSearchList();
  
  return (
    <>
      <div className={ styles.search }>
        <h1>Poketeers! Pokedex</h1>
        <p>Search for Pokemon by name or using the National Pokedex number.</p>
        <SearchInput searchPokemon={ searchPokemon } />
      </div>
      <div className={ styles.list }>
        { searched.length > 0 ?
          <ul>
            <li className={ styles.clear_button}>
              <Button
                labelText={ 'Clear Search History' }
                onClick={ clearSearchHistory }
                type={ 'primary' } />
            </li>
            {
              searched.map((pokemon: Pokemon, index: number) =>
                <li key={ `${pokemon.id}-${index}` }>
                  <PokemonCard
                    pokemon={ pokemon }
                    setSelectedPokemon={ setSelectPokemon } />
                </li>
              )
            }
          </ul> :
          null
        }
        <ul>
          {
            list.map((pokemon: Pokemon) =>
              <li key={ pokemon.name }>
                <PokemonCard
                  pokemon={ pokemon }
                  setSelectedPokemon={ setSelectPokemon } />
              </li>
            )
          }
        </ul>
      </div>
    </>
  );
}
