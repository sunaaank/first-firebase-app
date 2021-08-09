import authReducer from './authReducer';
import projectReducer from './projectReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from '../../components/timeline/state';
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from '../../components/friend/state';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  cartReducer: cartReducer,
  timeline: timelineReducer,
  friend: friendReducer,
});

export default rootReducer;
