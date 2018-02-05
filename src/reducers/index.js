import {combineReducers} from 'redux';
import UserReducer from './reducer-users'
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  users: UserReducer,
  activeuser : ActiveUserReducer  
});
export default allReducers;
