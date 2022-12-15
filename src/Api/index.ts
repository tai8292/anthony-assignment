const BASE_URL = 'https://data.messari.io/api/v1/assets';

export const getAssetData = (assetKey: string) => {
  return fetch(`${BASE_URL}/${assetKey}/metrics/market-data`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      throw err;
    });
};
