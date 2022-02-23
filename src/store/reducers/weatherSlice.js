import { createSlice } from '@reduxjs/toolkit';

const initialState = { city: null, data: null, loading: false };

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setNewData(state, action) {
      state.data = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload.name;
    },
  },

})


export const { setNewData, setCity } = weatherSlice.actions

export default weatherSlice.reducer