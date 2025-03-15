import {
  bindActionCreators,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import BookInterface from '../components/ResultsContainer/types/booksType';

const initialStateBook: BookForStore[] = [];
const searchInitialState: string = '';

interface BookForStore extends BookInterface {
  id: string;
}

export const searchValueRedux = createSlice({
  name: 'searchRedux',
  initialState: searchInitialState,
  reducers: {
    saveValue: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const dataStorageSlice = createSlice({
  name: 'dataStorage',
  initialState: initialStateBook,
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

const store = configureStore({
  reducer: {
    bookCollections: dataStorageSlice.reducer,
    searchValReducer: searchValueRedux.reducer,
  },
});

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...dataStorageSlice.actions,
      ...searchValueRedux.actions,
    },
    dispatch
  );
};

export const { add, deleteById, clearAllCollections } =
  dataStorageSlice.actions;

export const { saveValue } = searchValueRedux.actions;

export type RootState = ReturnType<typeof store.getState>;

export const checkIsId = (id: string): boolean => {
  const state: BookForStore[] = store.getState().bookCollections;
  return state.some((book) => book.id === id);
};

export const getCountBookSelect = (): number => {
  const state: BookForStore[] = store.getState().bookCollections;
  return state.length;
};

export default store;
