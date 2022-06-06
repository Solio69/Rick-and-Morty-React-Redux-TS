import { createAsyncThunk } from '@reduxjs/toolkit';

const baseStr: string = `https://rickandmortyapi.com/api`;

const fetchGetCharacters = createAsyncThunk(
  'characters/fetchGetCharacters',
  async (test:{
    activePage:number
    serchName:string
    status:null|string
    gender:null|string
  }, { rejectWithValue }) => {
    // const url = `${baseStr}/character/?page=${page}`;

    // test implementation
    const url = `${baseStr}/character/?page=${test.activePage}&name=${test.serchName?test.serchName:''}&status=${test.status?test.status:''}&gender=${test.gender?test.gender:''}&`;
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
