import { combineReducers } from 'redux';
import usersReducer from '../redux/users/reducer';
import cardsReducer from '../redux/cards/reducer';
import srsReducer from '../redux/srs/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  cards: cardsReducer,
  srs: srsReducer
});

export default rootReducer;