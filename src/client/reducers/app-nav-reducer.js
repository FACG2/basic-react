import { APP_NAV_OPEN, APP_NAV_CLOSE } from '../constants/actionTypes';

const initialState = {
  isOpen: true
};

const appNav = (state = initialState, action) => {
  switch (action.type) {
    case APP_NAV_CLOSE:
      return {
        ...state,
        isOpen: false
      };
    case APP_NAV_OPEN:
      return {
        ...state,
        isOpen: true
      };
    default:
      return state;
  }
};

export default appNav;
