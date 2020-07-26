import * as types from '../constants/actionTypes';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const verifyUser = () => async dispatch => {
  const token = Cookies.get('token');
  try {
    const data = jwtDecode(token);
    dispatch({ type: types.USER_VERIFY, payload: data });
  } catch {}
};
