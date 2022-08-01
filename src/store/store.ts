import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import peopleReducer from './slices/peopleSlice';
import characterReducer from './slices/characterSlice';

export const store = configureStore({
  reducer: { people: peopleReducer, character: characterReducer },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
