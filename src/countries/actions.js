import { SET_COUNTRIES } from './constants';
import { countries } from '../api/api';

export const setCountries = data => dispatch => dispatch({ type: SET_COUNTRIES, data });
export const getCountries = () => async (dispatch) => {
    const result = await countries();

    dispatch(setCountries(result.data.filter(item => item.phoneInfo)));
};
