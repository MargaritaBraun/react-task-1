import {
  bindActionCreators,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import BookInterface from '../MainComponents/types/booksType';
import { useDispatch } from 'react-redux';

const initialState: BookForStore[] = [];

interface BookForStore extends BookInterface {
  id: string;
}

export const dataStorageSlice = createSlice({
  name: 'dataStorage',
  initialState,

  reducers: {
    add: (state, action: PayloadAction<BookForStore>) => {
      const exists = state.some((book) => book.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },

    deleteById: (state, action: PayloadAction<string>) => {
      return state.filter((book) => book.id !== action.payload);
    },

    clearAllCollections: () => {
      return [];
    },
  },
});

const store = configureStore({ reducer: dataStorageSlice.reducer });

export type RootState = ReturnType<typeof store.getState>;

export const checkIsId = (id: string): boolean => {
  const state: BookForStore[] = store.getState();
  return state.some((book) => book.id === id);
};

export const getCountBookSelect = (): number => {
  const state: BookForStore[] = store.getState();
  return state.length;
};

export const { add, deleteById, clearAllCollections } =
  dataStorageSlice.actions;

export const useAcrions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(dataStorageSlice.actions, dispatch);
};

export default store;
