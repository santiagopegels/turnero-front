import { types } from "../types/types";

const initialState = {
    queues: [],
    place: '',
}

export const queueReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.queuesLoaded:
            return {
                ...state,
                queues: [...action.payload]
            }

        case types.queuesAddNewQueue:
            return {
                ...state,
                queues: [
                    ...state.queues,
                    action.payload
                ]
            }

        case types.queuesAddCallPlace:
            return {
                ...state,
                place: action.payload
            }

        case types.queueLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }
}
