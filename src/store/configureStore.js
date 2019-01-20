import { createStore, combineReducers } from 'redux';

import tempatReducer from './reducers/tempats';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  tempat: tempatReducer,
  auth: authReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
