import { createAsyncThunk } from '@reduxjs/toolkit';

const baseStr: string = `https://rickandmortyapi.com/api`;

const fetchGetCharacters = createAsyncThunk(
  'characters/fetchGetCharacters',
  async (page: number, { rejectWithValue }) => {
    const url = `${baseStr}/character/?page=${page}`;
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
