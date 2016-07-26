import { connect } from 'react-redux';
import {
    pipe,
    pick,
    evolve,
    values,
    filter,
    prop,
} from 'ramda';

import VenueList from '../components/VenueList.jsx';

const mapStateToProps = pipe(
    pick(['venues']),
    evolve({
        venues: pipe(
            filter(prop('visible')),
            values
        ),
    })
);

export default connect(mapStateToProps)(VenueList);
