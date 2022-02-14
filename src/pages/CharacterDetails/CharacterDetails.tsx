/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { useParams } from 'react-router-dom'
import { useStateCharacters } from '../../store/selectors';
import { searchCharacter, statusSrcIcon, genderSrcIcon, isUnknownStrModified } from '../../utils'
import { Select } from 'antd';
import 'antd/es/select/style/css';
import styles from './CharacterDetails.module.scss';


const CharacterDetails: FC = () => {
  const charactersData = useStateCharacters()
  const { list } = charactersData
  const { id } = useParams();

  // ищет персонажа с таким id в stor
  const charaster: any = searchCharacter(list, id)

  const { name, image, location, episode, gender, status, species } = charaster

  const statusSrc = statusSrcIcon(status)
  const statusText = isUnknownStrModified('status', status)

  const genderSrc = genderSrcIcon(gender)
  const genderText = isUnknownStrModified('gender', gender)

  const { Option } = Select;

  const episodeList = (
    <Select defaultValue="Episode" >
      {episode.map((el: any) => {
        el = el.substr(el.lastIndexOf('/') + 1);
        return (
          <Option key={el}>Episode {el}</Option>
        )
      })}
    </Select>

  )


  console.log(charaster)

  return (
    <div className={styles['charaster']}>
      <div className={styles['charaster__img']}>
        <img src={image} alt="charaster" />
      </div>
      <div className={styles['charaster__info']}>
        <div className={styles['charaster__info-item']}>
          <span className={styles['charaster__info-title']}>{name}</span>
        </div>
        <div className={styles['charaster__info-item']}>
          <img src={statusSrc} alt='status-icon' />
          <span>{statusText}</span>
        </div>
        <div className={styles['charaster__info-item']}>
          <img src={genderSrc} alt='gender-icon' />
          <span>{genderText}</span>
        </div>
        <div className={styles['charaster__info-item']}>
          Species: {species.toUpperCase()}
        </div>
        <div className={styles['charaster__info-item']}>
          Last seen: {location.name.toUpperCase()}
        </div>
        <div className={styles['charaster__info-item']}>
          Present in episodes: {episodeList}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
