import { fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types"
import { stopLoading, startLoading } from "./ui"

export const queuesStartLoading = () => {
    return async (dispatch) => {
        dispatch(startLoading())

        try {
            const resp = await fetchWithToken('queue/getAllUserQueues')
            const body = await resp.json()
            dispatch(queueLoaded(body.queues))
            dispatch(stopLoading())
        } catch (error) {
            console.log(error);
        }
    }
}

const queueLoaded = (queues) => ({
    type: types.queuesLoaded,
    payload: queues
})

export const newQueue = (payload) => {
    return async (dispatch) => {
        try {

            const resp = await fetchWithToken('queue', payload, 'POST')
            const body = await resp.json()
            dispatch(addNewQueue(body.queue))

        } catch (error) {
            console.log(error);
        }
    }
}

const addNewQueue = (queue) => ({
    type: types.queuesAddNewQueue,
    payload: queue
})

export const addCallPlace = (name) => ({
    type: types.queuesAddCallPlace,
    payload: name
})

export const queueLogout = () => ({
    type: types.queueLogout
})
