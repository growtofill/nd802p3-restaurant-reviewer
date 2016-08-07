import { combineReducers } from 'redux';

import categories from './categories';
import venues from './venues';

export default combineReducers({
    venues,
    categories,
});
