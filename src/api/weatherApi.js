const API_WEATHER = '28e00fce3d0a64c57c62bb5da9a5b83a';

const weatherApi = async (lat,lon) => {
  const apiUrl = await
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_WEATHER}`)
  try {
    return await apiUrl.json();
  } catch (e) {
    return null
  }
}
//api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=10&appid=${API_WEATHER}

export default weatherApi;