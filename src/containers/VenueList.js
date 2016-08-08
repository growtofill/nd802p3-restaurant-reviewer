import { connect } from 'react-redux';
import {
    pipe,
    filter,
    prop,
    curry,
    toPairs,
    map,
    apply,
    over,
    lensProp,
    prepend,
    identity,
    pick,
    when,
    has,
} from 'ramda';

import VenueList from '../components/VenueList.jsx';

// includes :: String -> String -> Boolean
const includes = curry((needle, haystack) =>
    haystack.toLowerCase().includes(needle.toLowerCase()));

// filterByPair :: [String, String] -> (Object -> Object)
const filterByPair = ([key, val]) => filter(
    when(
        has(key),
        pipe(prop(key), includes(val))
    )
);

// combineFilters :: Object -> (Object -> Object)
const filterBy = pipe(
    toPairs,
    map(filterByPair),
    prepend(identity),
    apply(pipe)
);

const mapStateToProps = (state, { query }) => pipe(
    pick(['venues']),
    over(lensProp('venues'), filterBy(query))
)(state);

export default connect(mapStateToProps)(VenueList);
