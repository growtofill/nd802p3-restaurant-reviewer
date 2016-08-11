import { combineReducers } from 'redux';

import categories from './categories';
import venues from './venues';
import location from './location';

export default combineReducers({
    venues,
    categories,
    location,
});
