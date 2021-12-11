import { combineReducers } from 'redux';
import user from './user';
import candidatesReducer from './candidates';
import students from './students';
import results from './results';
import report from './report';
import published from './published';

export default combineReducers({
  user, candidates: candidatesReducer, students, results, report, published
});
