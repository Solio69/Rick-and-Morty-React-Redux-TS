import iconDead from '../assets/dead-icon.png'
import iconAlive from '../assets/alive-icon.png'
import iconUnknown from '../assets/unknown-icon.png'

import iconFemale from '../assets/female-icon.png'
import iconMale from '../assets/male-icon.png'
import iconGenderless from '../assets/genderless-icon.png'
import iconGenderUnknown from '../assets/genderUnknown-icon.png'


const searchCharacter = (arrCrarasters: [], id: string | undefined) => {
  const charaster = arrCrarasters.find((item: any) => item.id === Number(id));
  return charaster
}

const statusSrcIcon = (status: string) => {
  if (status === 'Alive') {
    return iconAlive
  } else if (status === 'Dead') {
    return iconDead
  } else {
    return iconUnknown
  }
}

const genderSrcIcon = (gender: string) => {
  if (gender === 'Male') {
    return iconMale
  } else if (gender === 'Female') {
    return iconFemale
  } else if (gender === 'Genderless') {
    return iconGenderless
  } else {
    return iconGenderUnknown
  }
}


const isUnknownStrModified = (propertyName: string, value: string) => {
  return (value === 'unknown' ? `${propertyName} unknown` : value).toUpperCase()
}


export { searchCharacter, statusSrcIcon, genderSrcIcon, isUnknownStrModified }
