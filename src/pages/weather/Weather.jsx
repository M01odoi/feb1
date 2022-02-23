import FormBuilder from '../../components/formBuilder/FormBuilder';
import weatherApi from '../../api/weatherApi';
import { setCity, setNewData } from '../../store/reducers/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import cityApi from '../../api/cityApi';
import { setCitiesList } from '../../store/reducers/cityListSlice';
import { useEffect, useState } from 'react';
import './weather.scss';
import cityToLonLat from '../../api/cityToLonLat';
import convertSecToDateTime from './convertSecToDateTime';
import imageWeatherApi from '../../api/imageWeatherApi';

const Weather = () => {
  const [clickedDay, setClickedDay] = useState();
  const [showHourlyWeather, setShowHourlyWeather] = useState();
  const cityList = useSelector(state => state.cityList);
  const city = useSelector(state => state.weather.city);
  const data = useSelector(state => state.weather.data);
  useEffect(() => {
    if (!cityList.length) {
      cityApi().then(value => {
        dispatch(setCitiesList(value.results));
      })
    }
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

  const submit = (e, state) => {
    e.preventDefault();
    // weatherApi(0,-4.04).then((value)=>{
    //   console.log(value)
    // })

    cityToLonLat(state[0].value).then((data) => {
        weatherApi(data.coord.lat, data.coord.lon).then((value) => {
            console.log(value);
            dispatch(setCity(data))
            dispatch(setNewData(value))
          },
        );
      },
      reason => {
        console.log(reason);
      });
  }

  const renderListDays = (data) => {
    const arr = data.daily.map((obj, index) => {
      return <li key={index} onClick={() => setClickedDay(convertSecToDateTime(obj.dt).date)}>
        <button>
          <img src={`http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`} alt="photo"/>
          {convertSecToDateTime(obj.dt).dateTime} Temp:{obj.temp.day}°C {obj.weather[0].main}</button>
      </li>
    });
    console.log(clickedDay);
    return arr;
  }

  const renderListHours = (data, day) => {
    console.log(data);
    const arrHours = data.hourly.filter((obj) => convertSecToDateTime(obj.dt).date === day).map((obj, index) => {
      return <div key={index}>{convertSecToDateTime(obj.dt).time} Temp: {obj.temp}°C {obj.weather[0].main}</div>
    });
    if (arrHours.length) {
      return arrHours
    } else {
      const arr = data.daily.filter((obj) => convertSecToDateTime(obj.dt).date === day);
      console.log(arr[0]);
      return <div>{convertSecToDateTime(arr[0].dt).dateTime}
        <div>
            <img src={`http://openweathermap.org/img/wn/${arr[0].weather[0].icon}@2x.png`} width='150px' alt=""/>
          <div>
            Weather: {arr[0].weather[0].main}</div>
          <div>Max temp: {arr[0].temp.max}°C</div>
          <div>Min temp: {arr[0].temp.min}°C</div>
          <div>Morning: {arr[0].temp.morn}°C</div>
          <div>Day: {arr[0].temp.day}°C</div>
          <div>Evening: {arr[0].temp.eve}°C</div>
          <div>Night: {arr[0].temp.night}°C</div>
        </div>
      </div>
    }
  }

  return (<div className="weatherBody">
      <div className="selectAndCurrent"></div>
      <div className="chooseCity">
        <h1>Weather</h1>
        <FormBuilder fields={field} submit={submit}/>
      </div>
      {data ? <>
          {/*<img url=>*/}
          {/*<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="nononon"/>*/}

          <div className="currentField">
            <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="photo"/>
            <div className="weatherInfo">
              <div>City: {city} </div>
              <div>Current: {convertSecToDateTime(data.current.dt).dateTime} {'\t'}</div>
              <div>weather: {data.current.weather[0].description} {'\t'}</div>
              <div>temp: {data.current.temp}°C</div>
            </div>
          </div>
          <ul className="listWeekWeather">{renderListDays(data)}</ul>
          {renderListHours(data, clickedDay)}
          {/*    <div>{data.weather[0].main}, {data.weather[0].description} </div>*/}
          {/*    <div>Temp: {data.main.temp} °C</div>*/}
          {/*    <div>Feels like: {data.main.feels_like} °C</div>*/}
          {/*    <div>Humidity: {data.main.humidity}%</div>*/}
          {/*    <div>Wind: {data.wind.speed}m/s</div>*/}
        </>
        : <div>Choose city</div>}
    </div>
  )
}

export default Weather;