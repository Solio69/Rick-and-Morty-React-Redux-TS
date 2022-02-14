import { FC } from 'react';
import СharacterPreview from '../../components/СharacterPreview'
import styles from './CharacterList.module.scss';

interface CharacterListProps {
  list: []
}
const CharacterList: FC<CharacterListProps> = ({ list }) => {

  return (
    <>
      <ul className={styles['character__list']}>
        {list.map((item: any) => <СharacterPreview image={item.image} name={item.name} id={item.id} key={item.id} />)}
      </ul>
    </>
  );
};

export default CharacterList;
