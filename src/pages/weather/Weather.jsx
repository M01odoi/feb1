import FormBuilder from '../../components/formBuilder/FormBuilder';
import { field } from './fields';
import weatherApi from '../../api/weatherApi';
import { setNewData, weatherSlice } from '../../store/reducers/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import cityApi from '../../api/cityApi';
import { setCitiesList } from '../../store/reducers/cityListSlice';
import { useEffect } from 'react';

const Weather = () => {

  const cityList = useSelector(state => state.cityList);
  useEffect(() => {
    cityApi().then(value => {
      dispatch(setCitiesList(value.results));
    })
  }, []);

  const field = [
    {
      name: 'select city',
      type: 'select',
      required: true,
      placeholder: 'Select',
      options: cityList
    }
  ]

  const dispatch = useDispatch();
  const data = useSelector(state => state.weather.data);
  const submit = (e, state) => {
    e.preventDefault();
    weatherApi(state[0].value).then((value) => {
      dispatch(setNewData(value))
    }, reason => {
      console.log(reason);
    });
  }
  return (<>
      <h1>Weather</h1>
      <FormBuilder fields={field} submit={submit}/>
      {data ? <>
          <div>City: {data.name}</div>
          <div>{data.weather[0].main}, {data.weather[0].description} </div>
          <div>Temp: {data.main.temp} °C</div>
          <div>Feels like: {data.main.feels_like} °C</div>
          <div>Humidity: {data.main.humidity}%</div>
          <div>Wind: {data.wind.speed}m/s</div>
        </>
        : <div>Choose city</div>}
    </>
  )
}

export default Weather;