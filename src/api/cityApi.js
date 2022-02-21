
const cityApi = async () =>{
  const apiUrl = await fetch(
    'https://parseapi.back4app.com/classes/Ukraine_City?limit=20&order=-population&keys=name,cityId',
    {
      headers: {
        'X-Parse-Application-Id': 'y8VLsg2oCgffDRH73dAwMiJazrKCDmgcP8eK9Knj', // This is your app's application id
        'X-Parse-REST-API-Key': 'mQbPT9z6pVUR1Df10XHGc1RFdEeiY9tDFsAW7vqH', // This is your app's REST API key
      }
    }
  );
  return apiUrl.json();
}

export default cityApi;