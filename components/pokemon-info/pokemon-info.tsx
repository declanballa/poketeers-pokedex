import { TypeBadge } from '@components/type-badge/type-badge';
import styles from '@styles/pokemon-info.module.scss';


const PokemonInfo = ({ id, name, types }) => {
  let numberPrefix = '#';

  if (id < 10) {
    numberPrefix = '#00';
  } else if (id > 9 && id < 100) {
    numberPrefix = '#0';
  }

  return (
    <div className={ styles.container__info }>
      <div className={ styles.container__info_number}>
        { `${numberPrefix}${id}` }
      </div>
      <div className={ styles.container__info_name}>
        { name }
      </div>
      <TypeBadge types={ types }></TypeBadge>
    </div>
  );
};

export default PokemonInfo;