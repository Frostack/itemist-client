import { useEffect } from 'react';
import Cookies from 'js-cookie';

import store from '../config/store';
import { verifyUser } from '../actions/userActions';

const useSteamAuth = () => {
  const handleLogin = () => {
    const popupWindow = window.open(
      process.env.REACT_APP_API_URL + '/auth/steam',
      '_blank',
      'width=800, height=600'
    );
    if (window.focus) popupWindow.focus();
  };

  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.origin !== process.env.REACT_APP_API_URL) return;

      const { token, ok } = event.data;
      if (ok) {
        Cookies.set('token', token);
        store.dispatch(verifyUser(token));
      }
    });
  }, []);

  return handleLogin;
};

export default useSteamAuth;
