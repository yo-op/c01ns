import { createRequestTypes, action } from '../../../App/Actions';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../../../App/Actions/Types';

export const COIN = createRequestTypes('COIN');

export const coin = {
  request: finalCoin => action(COIN[REQUEST], { finalCoin }),
  success: (finalCoin, response) => action(COIN[SUCCESS], { finalCoin, response }),
  failure: (finalCoin, error) => action(COIN[FAILURE], { finalCoin, error }),
};
