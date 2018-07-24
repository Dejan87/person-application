import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const deletePerson = personId => {
    return {
        type: actionTypes.DELETE_PERSON,
        id: personId
    };
};

export const setPersons = persons => {
    return {
        type: actionTypes.SET_PERSONS,
        persons: persons
    }
};

export const fetchPersons = () => {
    return dispatch => {
        axios.get("/api/persons")
            .then(response => {
                dispatch(setPersons(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};