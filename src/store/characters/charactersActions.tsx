import { createAsyncThunk } from '@reduxjs/toolkit';

const baseStr: string = `https://rickandmortyapi.com/api`;
// `https://rickandmortyapi.com/api/character/?page=19`

const fetchGetCharacters = createAsyncThunk(
  'characters/fetchGetCharacters',
  async (_, { rejectWithValue }) => {
    const url = `${baseStr}/character`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error(`Server error ${response.status}!`);
      }

      return response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchGetCharacters }
