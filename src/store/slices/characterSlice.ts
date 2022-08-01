import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
import getCharacterRequest from '../../api/getCharacter';
import { Character, Film } from '../types';
import getFilms from '../../api/getFilms';
import axiosInstance from '../../api/config';

export interface CharacterState {
  data: Character | null;
  loading: boolean
}

const initialState: CharacterState = {
  data: null,
  loading: false,
};

export const getCharacterThunk = createAsyncThunk('getCharacter', async (id:string) => {
  const character = await getCharacterRequest(id);
  const films = await getFilms();
  const planet = await axiosInstance.get(character.data.homeworld);
  character.data.filmsData = films.data
    .results.filter((item:Film) => character.data.films.includes(item.url));
  character.data.planetData = planet.data;
  return character.data as Character;
});

export const characterSlice:Slice = createSlice({
  name: 'people',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacterThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getCharacterThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacterThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default characterSlice.reducer;
