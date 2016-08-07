import { connect } from 'react-redux';
import { pick } from 'ramda';

import Filter from '../components/Filter.jsx';

export default connect(pick(['categories']))(Filter);
