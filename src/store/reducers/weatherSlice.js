import { createSlice } from '@reduxjs/toolkit';

const initialState = { city: null, data: null, loading: false };

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setNewData(state, action) {
      state.city = action.payload.name;
      state.data = action.payload;
    },
  },
})


export const { setNewData } = weatherSlice.actions

export default weatherSlice.reducer