import Api from "../../services/Api";
import { LOADING, ERROR, LIST_COUNTRIES, LIST_COUNTRY } from "./types";
import { ERROR_MESSAGE_TIMEOUT } from "../../utils/error";

export const getCountries = () => async (dispatch: any) => {
  dispatch({
    type: LOADING,
    payload: { loading: true },
  });
  try {
    const { data } = await Api.getCountries();

    dispatch({
      type: LIST_COUNTRIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: ERROR_MESSAGE_TIMEOUT,
    });
  }
};

export const getCountry = (code: string) => async (dispatch: any) => {
  dispatch({
    type: LOADING,
    payload: { loading: true },
  });
  try {
    const { data } = await Api.getCountry(code);
    const [country] = data;

    dispatch({
      type: LIST_COUNTRY,
      payload: country,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: ERROR_MESSAGE_TIMEOUT,
    });
  }
};
