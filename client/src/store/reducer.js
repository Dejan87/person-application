import * as actionTypes from "./actionsTypes";

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PERSONS:
            return {
                ...state,
                persons: action.persons
            };

        default:
            return state;
    }

};

export default reducer;