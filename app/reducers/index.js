import { LOGIN_FAILURE } from '../actions';

const initialState = {
  user: {
    isLoggedIn: 'TOTO'
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        user: {
          isLoggedIn: 'TUTU'
        }
      })
      break;
    default:
      return state || initialState
  }
}
