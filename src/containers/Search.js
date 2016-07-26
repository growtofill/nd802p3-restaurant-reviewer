import { connect } from 'react-redux';
import { pick } from 'ramda';

import Search from '../components/Search.jsx';

export default connect(pick(['category']))(Search);
