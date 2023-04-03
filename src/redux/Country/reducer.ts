import { LOADING, ERROR, LIST_COUNTRIES, LIST_COUNTRY } from "./types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  countries: [],
  country: null,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LIST_COUNTRIES:
      return {
        ...state,
        loading: false,
        error: null,
        countries: action.payload,
      };
    case LIST_COUNTRY:
      return {
        ...state,
        loading: false,
        error: null,
        country: action.payload,
      };
    default:
      return state;
  }
};
