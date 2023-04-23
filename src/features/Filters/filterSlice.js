import { createSlice } from '@reduxjs/toolkit';

import { resetToEmpty } from '../Reset/resetAction';

const filterSlice = createSlice({
  name: '@@filter',
  initialState: 'all',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetToEmpty, () => {
      return 'all';
    });
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const selectActiveFilter = (state) => state.filter;
