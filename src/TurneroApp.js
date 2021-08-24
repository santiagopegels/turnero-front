import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { socket, SocketContext } from './context/socket'

export const TurneroApp = () => {

    return (
        <SocketContext.Provider value={socket}>
            <Provider store={store} >
                <AppRouter />
            </Provider>
        </SocketContext.Provider>
    )
}
