import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types"
import { queueLogout } from "./queues"
import { startLoading, stopLoading } from "./ui"


export const startLogin = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const resp = await fetchWithoutToken('auth/login', { email, password }, 'POST')
            const body = await resp.json()
            dispatch(stopLoading())
            
            if (body.status) {
                localStorage.setItem('token', body.token)
                localStorage.setItem('token-init-date', new Date().getTime())

                dispatch(login({
                    uid: body.user.uid,
                    name: body.user.name
                }))
            }
            else {
                return body
            }
        } catch (error) {
            console.log(error)
        }

    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const startRegister = (email, password, name) => {
    return async (dispatch) => {

        const resp = await fetchWithoutToken('auth/register', { email, password, name }, 'POST')
        const body = await resp.json()

        if (body.status) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch(login({
                uid: body.user.uid,
                name: body.user.name
            }))
        }

    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchWithToken('auth/renew')
        const body = await resp.json()

        if (body.status) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch(login({
                uid: body.user.uid,
                name: body.user.name
            }))
        } else {
            dispatch(checkingFinish())
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch(queueLogout())
        dispatch(logout())
    }
}

const logout = () => ({ type: types.authLogout })
