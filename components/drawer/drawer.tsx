import { EvolutionChain, Pokemon, PokemonAbility, PokemonMove, PokemonSpecies } from 'pokenode-ts';

import styles from '@styles/drawer.module.scss';
import Button from '@components/button/button';
import { PokemonSandboxService } from '@services/sandbox/pokemon-sandbox.service';
import usePokemonDetails from 'hooks/use-pokemon-details.hook';

const pokemonSandboxService = new PokemonSandboxService();

const Drawer = ({ pokemon, species, evolutionChain }: { pokemon: Pokemon, species: PokemonSpecies, evolutionChain: EvolutionChain }) => {
  const {
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
  } = usePokemonDetails(pokemon, species, evolutionChain);

  const setSelectedPokemon = (event) => {
    pokemonSandboxService.getPokemonByName(event.target.innerText.toLowerCase(), true);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  
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
            <Button  key={ name } labelText={ name} onClick={ setSelectedPokemon } type={ 'primary' } />
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
