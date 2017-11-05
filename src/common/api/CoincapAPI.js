import React from 'react';

const apiRouter = {
  COINS: '/coins', // add coins
  SPARKLINE: '/history/1day/', // sparkline for frontpage
  FRONT: '/front' // frontpage data
}

export default class CoincapAPI {
  static baseURL = 'https://coincap.io';

  function coincapBuildURL (apiRouter) {
    return {
      baseURL + apiRouter
    }
  }
}
