import Image from 'next/image';

export const TypeIcon = ({ type }: { type: string}) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const icon = require(`/public/icons/${type}.svg`);

  return (
    <Image alt={ type } height={ 20 } src={ icon } width={ 20 }  />
  );
};
