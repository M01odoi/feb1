const API_WEATHER = '1fb11540d83601b48cf6a00a6601175b';

const weatherApi = async (city = 'Kyiv') => {
  const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=${API_WEATHER}&units=metric`)
  // console.log(await apiUrl.json());
return await apiUrl.json();
}

export default weatherApi;