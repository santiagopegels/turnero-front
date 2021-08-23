import React, { useEffect, useState } from 'react'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { io } from 'socket.io-client'

export const TurneroApp = () => {
    const newSocket = io(process.env.REACT_APP_SOCKET);
    newSocket.emit('create user')

    newSocket.on('return', () => {
        console.log('algo')
    })
    
    console.log(newSocket)
    return (
        <Provider store={store} >
            <AppRouter />
        </Provider>
    )
}
