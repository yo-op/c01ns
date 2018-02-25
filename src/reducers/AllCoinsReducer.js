import _ from 'lodash';
import data from '../mocks/coins.json';

const newData = _.map(data.Data, (val, key) => {
  return {...val, key};
});

export default () => newData;