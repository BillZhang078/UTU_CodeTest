import { GET_CURRENCIES } from './types';
import api from '../util/api';
import axios from 'axios';

export const getCurrencies = () => async (dispatch) => {
  try {
    const res = await axios.get('api/v1/currencies');

    dispatch({
      type: GET_CURRENCIES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: 'CURRENCY_ERROR',
    });
  }
};
