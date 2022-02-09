import { useSelector, RootStateOrAny } from 'react-redux';

const useStateCharacters = () => {
  const stateCharacters = useSelector((state: RootStateOrAny) => state.characters);

  return stateCharacters;
};


export { useStateCharacters };
