import { EvolutionChain, Pokemon, PokemonAbility, PokemonMove, PokemonSpecies, PokemonType } from 'pokenode-ts';

import styles from '@styles/drawer.module.scss';
import colors from '@styles/colors.module.scss';
import Button from '@components/button/button';
import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';

const pokemonSandboxService = new PokemonSandboxService();

const Drawer = ({ pokemon, species, evolutionChain }: { pokemon: Pokemon, species: PokemonSpecies, evolutionChain: EvolutionChain }) => {
  const types = pokemon.types.map((type: PokemonType) => type.type.name);
  const titleStyle = { color: colors[`${types[0]}Type`] };
  const englishFlavorEntry = species?.flavor_text_entries.filter(entry => entry.language.name === 'en')[0];
  const englishSpeciesEntry = species?.genera.filter(genus => genus.language.name === 'en')[0];
  const meterToFootConversionRate = 3.2808399;
  const pokemonMeters = pokemon.height / 10;
  const pokemonFeet = Math.round(pokemonMeters * meterToFootConversionRate);
  const KiloToPoundConversionRate = 2.20462;
  const pokemonKilograms = pokemon.weight / 10;
  const pokemonPounds = Math.round(pokemonKilograms * KiloToPoundConversionRate);
  const pokemonLevelUpMoves = pokemon.moves.filter((move: PokemonMove) => move.version_group_details[0].move_learn_method.name === 'level-up');
  pokemonLevelUpMoves.sort((a, b) => a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at);
  const pokemonHasEvolutionChain = evolutionChain?.chain.evolves_to.length > 0;
  const pokemonEvolutionNames = [evolutionChain?.chain.species.name];
  
  if (evolutionChain?.chain.evolves_to.length > 0) { // 2nd gen
    pokemonEvolutionNames.push(evolutionChain.chain.evolves_to[0].species.name);

    if (evolutionChain?.chain.evolves_to[0].evolves_to.length > 0) { // 3rd gen
      pokemonEvolutionNames.push(evolutionChain.chain.evolves_to[0].evolves_to[0].species.name);
    }
  }

  const setSelectedPokmeon = (event) => pokemonSandboxService.getPokemonByName(event.target.innerText.toLowerCase(), true);
  
  return (
    <div className={ styles.container }>
      <p>{ englishFlavorEntry?.flavor_text }</p>
      <div className={ styles.container__section }>
        <h2 style={ titleStyle }>Pokedex Data</h2>
        <ul>
          <li><ul>
            <li>Species</li>
            <li>{ englishSpeciesEntry?.genus }</li>
          </ul></li>
          <li><ul>
            <li>Height</li>
            <li>{ `${pokemonMeters} m (~${pokemonFeet} ft)` }</li>
          </ul></li>
          <li><ul>
            <li>Weight</li>
            <li>{ `${pokemonKilograms} kg (~${pokemonPounds} lbs)` }</li>
          </ul></li>
          <li><ul>
            <li>Abilities</li>
            <li>{ pokemon.abilities.map((ability: PokemonAbility) => ability.ability.name.replace('-', ' ')).join(', ')}</li>
          </ul></li>
        </ul>
      </div>
      <div className={ styles.container__section }>
        <h2 style={titleStyle}>Evolutions</h2>
        { pokemonHasEvolutionChain ?
          pokemonEvolutionNames.map((name: string) =>
            <Button  key={ name } labelText={ name} onClick={ setSelectedPokmeon } type={ 'primary' } />
          ) :
          <p>This pokemon does not have an evolution chain.</p>
        }
      </div>
      <div className={ styles.container__section }>
        <h2 style={titleStyle}>Moves <span>(Level up only)</span></h2>
        <ul>
          {
            pokemonLevelUpMoves.map((move: PokemonMove) =>
              <li key={ move.move.name }><span>({ move.version_group_details[0].level_learned_at }) </span>{ move.move.name.replace('-', ' ') }</li>
            )
          }
        </ul>
      </div>
    </div >
  );
};

export default Drawer;