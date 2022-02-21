import { combineReducers } from 'redux';
import weatherSlice from './reducers/weatherSlice';
import { configureStore } from '@reduxjs/toolkit';
import cityListSlice from './reducers/cityListSlice';

const allReducers = combineReducers({
  weather: weatherSlice,
  cityList: cityListSlice,
});
const store = configureStore({ reducer: allReducers});

export default store;
