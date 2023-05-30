'use client';

import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const pokemonSandboxService = new PokemonSandboxService();

export default function Details() {
  const [selectedPokemon, setSelectedPokemon] = useState({name: 'none'});
  const selected = useSelector(pokemonSandboxService.pokemonSelected);

  useEffect(() => {
    setSelectedPokemon(selectedPokemon);
  }, [selectedPokemon]);

  return (
    <div>
      { selected.name }
    </div>
  );
}