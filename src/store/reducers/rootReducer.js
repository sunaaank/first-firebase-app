import authReducer from './authReducer';
import projectReducer from './projectReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  cartReducer: cartReducer,
});

export default rootReducer;
