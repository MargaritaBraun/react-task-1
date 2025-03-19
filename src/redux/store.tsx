import { configureStore } from '@reduxjs/toolkit';
import controlledFormReducer from './formSlice.tsx';

const store = configureStore({
  reducer: {
    controlledForm: controlledFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
