import { FC } from 'react';
import –°haracterPreview from '../../components/–°haracterPreview'
import styles from './CharacterList.module.scss';

interface CharacterListProps {
  list: []
}
const CharacterList: FC<CharacterListProps> = ({ list }) => {

  return (
    <>
      <ul className={styles['character__list']}>
        {list.map((item: any) => <–°haracterPreview image={item.image} name={item.name} id={item.id} key={item.id} />)}
      </ul>
    </>
  );
};

export default CharacterList;
