import { APP_NAV_OPEN, APP_NAV_CLOSE } from '../constants/actionTypes';

export const appNavClose = () => {
  return {
    type: APP_NAV_CLOSE
  };
};

export const appNavOpen = () => {
  return {
    type: APP_NAV_OPEN
  };
};
