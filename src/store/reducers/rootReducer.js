import authReducer from './authReducer';
import projectReducer from './projectReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';
import timelineReducer from '../../components/timeline/state';
import friendReducer from '../../components/friend/state';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  cartReducer: cartReducer,
  timeline: timelineReducer,
  friend: friendReducer,
});

export default rootReducer;
