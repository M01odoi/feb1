const imageWeatherApi = async (code) => {
  const apiImg = await fetch(`http://openweathermap.org/img/wn/${code}@2x.png`);
  try {
    console.log(apiImg.url);
    return apiImg.url;
  } catch (e) {
    return null;
  }
}

export default imageWeatherApi;