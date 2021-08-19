import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types"


export const startLogin = (email, password) => {
    return async (dispatch) => {

        const resp = await fetchWithoutToken('auth/login', { email, password }, 'POST')
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
