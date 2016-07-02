import { omit } from 'ramda';

const initialState = {
    venues: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VENUE':
            return Object.assign({}, state, {
                venues: [
                    ...state.venues,
                    omit(['type'], action)
                ]
            });
        default:
            return state;
    }
};
