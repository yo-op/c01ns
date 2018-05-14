import { normalize } from 'normalizr';
import { coinSchema } from './CryptocompareSchema';

const baseUrl = 'https://min-api.cryptocompare.com/data/';
// const appName = 'c01ns';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = async (endpoint, schema) => {
  const fullUrl = (endpoint.indexOf(baseUrl) === -1) ? baseUrl + endpoint : endpoint;
  try {
    const response = await fetch(fullUrl);
    const responseJson = await response.json();
    const data = Object.assign(
      {},
      normalize(responseJson, schema),
    );
    // console.log(data);
    return data;
  } catch (error) {
    return error;
    // console.log(error);
  }
};

// api services
const fetchCoin = coinName => callApi(`coin/${coinName}`, coinSchema);

export default fetchCoin;
