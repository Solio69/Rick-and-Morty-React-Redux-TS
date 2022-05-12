import { FC, useEffect } from 'react';
import Filters from '../../components/Filters'
import SearchInput from '../../components/SearchInput';
import CharacterList from '../../components/CharacterList'
import Loader from '../../components/Loader'
import ErrorMessage from '../../components/ErrorMessage'
import AntPagination from '../../components/AntPagination'
import { fetchGetCharacters } from '../../store/characters/charactersActions'
import { oncFiltersChange } from '../../store/characters/charactersSlise';
import { useDispatch } from 'react-redux';
import { useStateCharacters } from '../../store/selectors';
import styles from './Home.module.scss';


const Home: FC = () => {
  const dispath = useDispatch();
  const charactersData = useStateCharacters()
  const { error, status, list, activePage, searchParams } = charactersData

  useEffect(() => {
    const test = {...searchParams,activePage}
    console.log(test)
    dispath(fetchGetCharacters(test));
  }, [activePage, dispath,searchParams])

  const changeFilterOptions = (filterName:any, filterValue:any) =>{
    dispath(oncFiltersChange({[filterName]:filterValue}));
  }



  const newList = list && <CharacterList list={list} />

  const loader = (status === 'loading' && list.length === 0) && <Loader />

  const errorMessage = error && <ErrorMessage errorText={error} />

  const pagination = list.length !==0 && <AntPagination />

  return (
    <div className={styles['home-wrapper']}>
      <section className={styles['home-wrapper__inner']}>
      <SearchInput/>
      <Filters changeFilterOptions={changeFilterOptions}/>
      </section>
      <section className={styles['home-wrapper__inner']}>
        {errorMessage}
        {loader}
        {newList}
      </section>
      <div className={styles['home-wrapper__inner']}>
        {pagination}
      </div>
    </div>
  );
};

export default Home;
