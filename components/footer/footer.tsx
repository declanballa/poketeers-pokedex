import Image from 'next/image';

import styles from '@styles/footer.module.scss';
import Heart from '@icons/heart.svg';

const Footer = () => {
  return (
    <div className={ styles.container }>
      <div>
        Crafted with <Image alt={ 'heart '} height={ 32} src={ Heart } width={ 10 } /> in San Diego, CA
      </div>
      <div>
        <span>
          <a href="https://www.linkedin.com/in/dballa/" target="_black">Declan Balla</a>:
          Development
        </span>
        <span>&nbsp;&nbsp; | &nbsp;&nbsp; </span>
        <span>
          <a href="https://farias.design/" target="_blank">farias.design</a>:
          Design
        </span>
        <span>&nbsp;&nbsp; | &nbsp;&nbsp; </span>
        <span>
          <a href="https://pokeapi.co/" target="_blank">PokeAPI</a>:
          Data
        </span>
      </div>
    </div>
  );
};

export default Footer;