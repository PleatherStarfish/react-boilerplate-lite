import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from 'utils/history';

import globalReducer from 'containers/App/reducer';
import homeReducer from 'containers/HomePage/reducer';

/**
 * Merges the main reducer with the router state and reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    global: globalReducer,
    home: homeReducer,
  });

  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
