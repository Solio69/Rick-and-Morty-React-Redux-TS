import { createSlice } from '@reduxjs/toolkit';
import { fetchGetCharacters } from '../characters/charactersActions'

interface initialStateTypes {
  list: [], // уточнить типы
  status: null | 'loading' | 'resolved' | 'rejected',
  error: null | string,
}

const initialState: initialStateTypes = {
  list: [],
  status: null,
  error: null,
}

const charactersSlise = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    //...
  },

  extraReducers: {
    [fetchGetCharacters.pending.type]: (state) => {
      // console.log('pending', action.payload)
      state.status = 'loading';
      state.error = null

    },

    [fetchGetCharacters.fulfilled.type]: (state, action) => {
      console.log('fulfilled', action.payload)
      // console.log('fulfilled', action.payload.results)
      const newList: [] = action.payload.results
      state.status = 'resolved';
      state.list = newList
    },

    [fetchGetCharacters.rejected.type]: (state, action) => {
      // console.log('rejected', action.payload)
      const errorMessage: string = action.payload
      state.status = 'rejected'
      state.error = errorMessage
    },
  },
});

// export const { } = charactersSlise.actions;

export default charactersSlise.reducer;
