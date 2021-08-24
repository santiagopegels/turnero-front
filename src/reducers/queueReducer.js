import { types } from "../types/types";

const initialState = {
    queues: []
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

        default:
            return state;
    }
}
