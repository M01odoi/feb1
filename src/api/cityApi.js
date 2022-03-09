const cityApi = async () =>{
  const apiUrl = await fetch(
    'https://parseapi.back4app.com/classes/City?limit=30&order=-population&keys=name',
    {
      headers: {
        'X-Parse-Application-Id': 'WHhatLdoYsIJrRzvkD0Y93uKHTX49V9gmHgp8Rw3', // This is the fake app's application id
        'X-Parse-Master-Key': 'iyzSAHUmPKUzceWRIIitUD1OKAGHvVUzEYb5DCpj', // This is your app's REST API key
      }
    }
  );
  return apiUrl.json();
}

export default cityApi;