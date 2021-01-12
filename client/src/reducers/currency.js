import { GET_CURRENCIES } from '../actions/types';

const initState = {
  currencies: [],
  error: null,
};

const currencyReducer = (state = initState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: payload,
      };
    default:
      return state;
  }
};

export default currencyReducer;
