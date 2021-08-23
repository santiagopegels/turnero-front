import { fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types"

export const queuesStartLoading = () => {
    return async (dispatch) => {
        try {

            const resp = await fetchWithToken('queue/getAllUserQueues')
            const body = await resp.json()
            dispatch(queueLoaded(body.queues))

        } catch (error) {
            console.log(error);
        }
    }
}

const queueLoaded = (queues) => ({
    type: types.queuesLoaded,
    payload: queues
})