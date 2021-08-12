import authReducer from '../store/reducers/authReducer';
import projectReducer from '../store/reducers/projectReducer';
import cartReducer from '../store/reducers/cartReducer';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import timelineReducer from '../components/timeline/state/index';
import friendReducer from '../components/friend/state/index';
import createSagaMiddleware from 'redux-saga';
import timelineSaga from '../components/timeline/state/saga';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  cartReducer: cartReducer,
  timeline: timelineReducer,
  friend: friendReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
export default store;

sagaMiddleware.run(timelineSaga);
