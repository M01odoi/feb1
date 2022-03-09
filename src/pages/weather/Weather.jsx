import FormBuilder from '../../components/formBuilder/FormBuilder.tsx';
import weatherApi from '../../api/weatherApi';
import { setCity, setNewData } from '../../store/reducers/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import cityApi from '../../api/cityApi';
import { setCitiesList } from '../../store/reducers/cityListSlice';
import { useEffect, useState } from 'react';
import './weather.scss';
import cityToLonLat from '../../api/cityToLonLat';
import convertSecToDateTime from './convertSecToDateTime';
import d2d from 'degrees-to-direction';

const Weather = () => {
  const [clickedDay, setClickedDay] = useState();
  const [activeHours, setActiveHours] = useState([0, 1, 2, 3]);
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
      name: 'Select city',
      type: 'select',
      required: true,
      placeholder: 'Select',
      options: cityList
    }
  ]

  const dispatch = useDispatch();

  const submit = (e, state) => {
    e.preventDefault();

    cityToLonLat(state[0].value).then((data) => {
        weatherApi(data.coord.lat, data.coord.lon).then((value) => {
            dispatch(setCity(data))
            dispatch(setNewData(value))
          },
        );
      },
      reason => {
        console.log(reason);
      });
  }
  const d2d = require('degrees-to-direction');

  const renderListDays = (data) => {
    const arr = data.daily.map((obj, index) => {
      return <li key={index} onClick={() => setClickedDay(convertSecToDateTime(obj.dt).date)}>
        <button onClick={setDefaultValueOfActiveHours}
                className={clickedDay === convertSecToDateTime(obj.dt).date ? 'active' : null}>
          <img src={`http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`} alt="photo"/>
          <h4>{convertSecToDateTime(obj.dt).dateTime}</h4> Temp:{obj.temp.day}°C {obj.weather[0].main}</button>
      </li>
    });
    return arr;
  }
  const setDefaultValueOfActiveHours = () => {
    setActiveHours([0, 1, 2, 3]);
  }
  const renderListHours = (data, day = new Date().getDate()) => {
    const arrHours = data.hourly.filter((obj) => convertSecToDateTime(obj.dt).date === day).map((obj, index) => {
      if (activeHours.includes(index)) {
        return <div key={index} className={'activeHour'}>
          <h5>{convertSecToDateTime(obj.dt).time}</h5>
          <div>{obj.weather[0].main}</div>
          <div>Temp: {obj.temp}°</div>
          <div>Feels like: {obj.feels_like}°</div>
          <div>Wind: {obj.wind_speed} m/s</div>
          <div>Wind direction: {d2d(obj.wind_deg)} </div>
        </div>
      }
    });
    const arr = data.daily.filter((obj) => convertSecToDateTime(obj.dt).date === day);
    return <>
      <div className="weatherInfoForDayHour">
        <div className="weatherInfoForDay">
          <div className="weatherImg">
            <img src={`http://openweathermap.org/img/wn/${arr[0].weather[0].icon}@2x.png`} alt=""/>
            {arr[0].weather[0].main}
            <div className="weatherSun">
              Sunrise: {convertSecToDateTime(arr[0].sunrise).time}
            </div>
            <div className="weatherSun">
              Sunset: {convertSecToDateTime(arr[0].sunset).time}
            </div>
          </div>
          <div className="weatherInfo">
            <div>Max temp: {arr[0].temp.max}°</div>
            <div>Min temp: {arr[0].temp.min}°</div>
            <div>Morning: {arr[0].temp.morn}°</div>
            <div>Day: {arr[0].temp.day}°</div>
            <div>Evening: {arr[0].temp.eve}°</div>
            <div>Night: {arr[0].temp.night}°</div>
          </div>
        </div>
        {arrHours.length ? <div className="weatherInfoForHour">
          <button onClick={prevHourInfo}>&lt;-</button>
          {arrHours}
          <button onClick={()=>nextHourInfo(arrHours)}>-&gt;</button>
        </div> : null}
      </div>
    </>
  }
  const prevHourInfo = () => {
    if (activeHours[0] !== 0) {
      setActiveHours(activeHours.map((numb) => numb - 1));
    }
  }
  const nextHourInfo = (arrHours) => {
    if (!arrHours[arrHours.length-1]) {
      setActiveHours(activeHours.map((numb) => numb + 1));
    }
  }
  return (<div className="weatherBody">
      <h1>Weather</h1>
      <div className="chooseCity">
        <FormBuilder fields={field} submit={submit}/>
        {data ? <>
          <div className="currentField">
            <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="photo"/>
            <div className="weatherCurrentInfo">
              <div>City: {city} </div>
              <div>Current: {convertSecToDateTime(data.current.dt).dateTime} {'\t'}</div>
              <div>weather: {data.current.weather[0].description} {'\t'}</div>
              <div>temp: {data.current.temp}°C</div>
              <div>wind: {data.current.wind_speed} m/s</div>
            </div>
          </div>
        </> : null}
      </div>
      {data ? <>
          <ul className="listWeekWeather">{renderListDays(data)}</ul>
          {clickedDay ? renderListHours(data, clickedDay) : null}
        </>
        : <></>}
    </div>
  )
}

export default Weather;