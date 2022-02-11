import { FC, useEffect } from 'react';
import CharacterList from '../../components/CharacterList'
import AntLoader from '../../components/AntLoader'
import ErrorMessage from '../../components/ErrorMessage'
import AntPagination from '../../components/AntPagination'
import { fetchGetCharacters } from '../../store/characters/charactersActions'
import { useDispatch } from 'react-redux';
import { useStateCharacters } from '../../store/selectors';
import styles from './Home.module.scss';


const Home: FC = () => {
  const dispath = useDispatch();
  const charactersData = useStateCharacters()
  const { error, status, list, activePage } = charactersData

  useEffect(() => {
    dispath(fetchGetCharacters(activePage));
  }, [activePage, dispath])

  const newList = list && <CharacterList list={list} />

  const loader = status === 'loading' && <AntLoader />

  const errorMessage = error && <ErrorMessage errorText={error} />

  const pagination = <AntPagination />

  return (
    <div className={styles['home-wrapper']}>
      <div className={styles['home-wrapper__inner']}>
        {errorMessage}
        {loader}
        {newList}
      </div>
      <div className={styles['home-wrapper__inner']}>
        {pagination}
      </div>
    </div>
  );
};

export default Home;
