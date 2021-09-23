import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { socket, SocketContext } from './context/socket'
import { HashRouter } from 'react-router-dom'

export const TurneroApp = () => {
    return (
        <SocketContext.Provider value={socket}>
            <Provider store={store} >
                <HashRouter basename='/'>
                    <AppRouter />
                </HashRouter>
            </Provider>
        </SocketContext.Provider>
    )
}
