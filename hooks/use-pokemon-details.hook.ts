import { useMemo } from 'react';

import colors from '@styles/colors.module.scss';

function usePokemonDetails(pokemon, species, evolutionChain) {
  const meterToFootConversionRate = 3.2808399;
  const kiloToPoundConversionRate = 2.20462;

  const details = useMemo(() => {
    const types = pokemon.types.map((type) => type.type.name);
    const titleStyle = { color: colors[`${types[0]}Type`] };

    const englishFlavorEntry = species?.flavor_text_entries.find(
      (entry) => entry.language.name === 'en'
    );

    const englishSpeciesEntry = species?.genera.find(
      (genus) => genus.language.name === 'en'
    );

    const pokemonMeters = pokemon.height / 10;
    const pokemonFeet = Math.round(pokemonMeters * meterToFootConversionRate);

    const pokemonKilograms = pokemon.weight / 10;
    const pokemonPounds = Math.round(pokemonKilograms * kiloToPoundConversionRate);

    const pokemonLevelUpMoves = pokemon.moves
      .filter(
        (move) => move.version_group_details[0].move_learn_method.name === 'level-up'
      )
      .sort(
        (a, b) =>
          a.version_group_details[0].level_learned_at -
          b.version_group_details[0].level_learned_at
      );

    const pokemonHasEvolutionChain = evolutionChain?.chain.evolves_to.length > 0;

    const pokemonEvolutionNames = [evolutionChain?.chain.species.name];
    if (pokemonHasEvolutionChain) {
      const secondGen = evolutionChain.chain.evolves_to[0];
      pokemonEvolutionNames.push(secondGen.species.name);

      if (secondGen.evolves_to.length > 0) {
        pokemonEvolutionNames.push(secondGen.evolves_to[0].species.name);
      }
    }

    return {
      titleStyle,
      englishFlavorEntry,
      englishSpeciesEntry,
      pokemonMeters,
      pokemonFeet,
      pokemonKilograms,
      pokemonPounds,
      pokemonLevelUpMoves,
      pokemonHasEvolutionChain,
      pokemonEvolutionNames,
    };
  }, [pokemon, species, evolutionChain]);

  return details;
}

export default usePokemonDetails;
