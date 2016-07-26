import { connect } from 'react-redux';
import {
    pipe,
    always,
} from 'ramda';

import { addTip } from '../actions';
import AddTip from '../components/AddTip.jsx';

const mapDispatchToProps = dispatch => ({
    onAddTip: pipe(
        addTip,
        dispatch
    ),
});

export default connect(always({}), mapDispatchToProps)(AddTip);
