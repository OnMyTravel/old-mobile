import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;

  console.log(`Reducer > nav`)
  if(action.type === 'NAVIGATION') {
    console.log(`Reducer > nav > Navigation to "${action.route}" screen`)

    if(action.route == 'Back') {
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    } else {
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.route }),
        state
      );
    }
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  console.log(`Reducer > auth`)
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;