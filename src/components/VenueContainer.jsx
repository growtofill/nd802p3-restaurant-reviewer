import React, { Component } from 'react';
import { connect } from 'react-redux';

import Venue from '../components/Venue.jsx';

class VenueContainer extends Component {
    render() {
        const { venue } = this.props;

        return venue ? <Venue venue={venue} /> : null;
    }
}

const mapStateToProps = ({ venues }, { params }) => ({
    venue: venues[params.venueId],
});

export default connect(mapStateToProps)(VenueContainer);
