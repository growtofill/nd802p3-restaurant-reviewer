import { connect } from 'react-redux';
import {
    pick,
    pipe,
} from 'ramda';

import { setLocation } from '../actions/location';
import Welcome from '../components/Welcome.jsx';

const mapDispatchToProps = dispatch => ({
    setLocation: pipe(setLocation, dispatch),
});

export default connect(pick(['location']), mapDispatchToProps)(Welcome);
