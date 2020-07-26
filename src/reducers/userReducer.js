import { USER_VERIFY, USER_LOGOUT } from '../constants/actionTypes';

const INITIAL_STATE = {
  isVerified: false,
  data: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_VERIFY:
      return { ...state, isVerified: true, data: action.payload };
    case USER_LOGOUT:
      return { ...state, isVerified: false, data: null };
    default:
      return state;
  }
};
