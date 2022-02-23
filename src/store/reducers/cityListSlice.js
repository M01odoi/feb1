import { createSlice } from '@reduxjs/toolkit';

const cityListSlice = createSlice({
  name: 'cityList',
  initialState: [],
  reducers:{
    setCitiesList(state,action){
      action.payload.map((obj)=>{
        // if (obj.name!==)
        state.push(obj.name);
      });
    },
  }
});

export const {setCitiesList} = cityListSlice.actions;
export default cityListSlice.reducer;