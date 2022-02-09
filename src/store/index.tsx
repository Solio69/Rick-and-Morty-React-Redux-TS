import { configureStore } from '@reduxjs/toolkit';
import characterListReduser from './characters/charactersSlise';


const store = configureStore({
  reducer: {
    characters: characterListReduser,
  },
});
export type RootState = ReturnType<typeof store.getState>

export default store


