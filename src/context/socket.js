import React from 'react'
import socketio from "socket.io-client";

export const socket = socketio(process.env.REACT_APP_SOCKET, {
    auth: {
        token: localStorage.getItem('token')
    },
});

export const SocketContext = React.createContext();