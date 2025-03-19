import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FormState from '../types/formState';
import FormData from '../types/formType';
import { RootState } from './store';
import contries from './contries';

const initialState: FormState = {
  unformsData: [],
  countries: contries,
  hooksformsData: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUncontrForm(state, action: PayloadAction<FormData>) {
      state.unformsData.push(action.payload);
    },
    setCountres(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
    addHooksFormData(state, action: PayloadAction<FormData>) {
      state.hooksformsData.push(action.payload);
    },
  },
});


export const { addUncontrForm, setCountres, addHooksFormData } =
  formSlice.actions;

export const selectUnformsData = (state: RootState) =>
  state.controlledForm.unformsData;

export default formSlice.reducer;
