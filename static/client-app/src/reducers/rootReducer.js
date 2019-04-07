import {
    FETCH_WATER_CANS_BEGIN,
    FETCH_WATER_CANS_SUCCESS,
    FETCH_WATER_CANS_FAILURE
} from "../actions"

let initialState = {
    waterCans: [],
    error: false,
    loading: false
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_WATER_CANS_SUCCESS:
            return {
                ...state,
                waterCans: action.data.water_cans
            }
        case FETCH_WATER_CANS_FAILURE:
            return {
                ...state,
                error: true
            }
        case FETCH_WATER_CANS_BEGIN:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default rootReducer