import { connect } from 'react-redux';
import { pick } from 'ramda';

import App from '../components/App.jsx';

export default connect(pick(['location']))(App);
