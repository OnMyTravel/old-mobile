export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(credentials) {
  if(credentials.username == 'alwin') {
    return {
      type: LOGIN_SUCCESS
    }
  } else {
    return {
      type: LOGIN_FAILURE
    }
  }
};
