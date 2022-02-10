import { FC, useEffect } from 'react';
import СharacterPreview from '../../components/СharacterPreview'
import LoadingIndicator from '../../components/LoadingIndicator'
import ErrorMessage from '../../components/ErrorMessage'
import { fetchGetCharacters } from '../../store/characters/charactersActions'
import { useDispatch } from 'react-redux';
import styles from './CharacterList.module.scss';
import { useStateCharacters } from '../../store/selectors';

const CharacterList: FC = () => {
  const dispath = useDispatch();
  const charactersData = useStateCharacters()

  const { error, status } = charactersData

  useEffect(() => {
    dispath(fetchGetCharacters());

  }, [])

  const list = charactersData.list && <ul className={styles['character__list']}>
    {charactersData.list.map((item: any) => {
      return <СharacterPreview image={item.image} name={item.name} key={item.id} />
    })}
  </ul>

  const loader = status === 'loading' && <LoadingIndicator />

  const errorMessage = error && <ErrorMessage errorText={error} />


  return (
    <>
      {errorMessage}
      {loader}
      {list}
    </>
  );
};

export default CharacterList;
