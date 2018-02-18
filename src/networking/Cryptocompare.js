export default class Cryptocompare {

    static getMoviesFromApi = async () => {
      try {
        const response = await fetch(
          'https://facebook.github.io/react-native/movies.json'
        );
        const responseJson = await response.json();
        console.log(responseJson.movies);
        return responseJson.movies;
      } catch (error) {
        console.error(error);
      }
    };

    static getInitialCoins = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,DASH&tsyms=BTC,USD,EUR'
        );
        const responseJson = await response.json();
        console.log(responseJson);
        return responseJson;
      } catch (error) {
        console.error(error);
      }
    }


    static getAllCurrency = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,DASH&tsyms=BTC,USD,EUR'
        );
        const responseJson = await response.json();
        console.log(responseJson);
        return responseJson;
      } catch (error) {
        console.error(error);
      }
    };


    static getCoinInfo = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,DASH&tsyms=BTC,USD,EUR'
        );
        const responseJson = await response.json();
        console.log(responseJson);
        return responseJson;
      } catch (error) {
        console.error(error);
      }
    } 

}