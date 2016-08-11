const defaultLocation = 'Kyiv';

export default function (state = defaultLocation, action) {
    switch (action.type) {
        case 'SET_LOCATION':
            return action.location;
        default:
            return state;
    }
}
