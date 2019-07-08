import { combineReducers } from 'redux';

import { reducer as todolists } from './todolists';

export default combineReducers({
  todolists,
});
