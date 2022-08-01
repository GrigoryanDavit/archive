import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
import getPeopleRequest from '../../api/getPeople';

export interface Character {
  id: string,
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: 'male' | 'female',
  homeworld: string,
  films: string[],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string,
}

export interface PeopleState {
  people: Character[],
  totalItems: number,
  pageCount: number,
  loading: boolean
}

const initialState: PeopleState = {
  people: [],
  totalItems: 0,
  pageCount: 1,
  loading: false,
};

export const getPeopleThunk = createAsyncThunk('getPeople', async (page:string) => {
  const people = await getPeopleRequest(page);
  return people.data;
});

export const peopleSlice:Slice = createSlice({
  name: 'people',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getPeopleThunk.fulfilled, (state, action) => {
      const { results, count } = action.payload;
      state.people = results.map((item:Character) => {
        const urlArray = item.url.split('/');
        const id = urlArray[urlArray.length - 2];
        return { ...item, id };
      });
      state.totalItems = count;
      state.pageCount = Math.ceil(count / 10);
      state.loading = false;
    });
    builder.addCase(getPeopleThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPeopleThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default peopleSlice.reducer;
