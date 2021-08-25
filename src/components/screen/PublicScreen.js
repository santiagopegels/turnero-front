import React, { useContext, useState } from 'react'
import { DashboardScreen } from '../dashboard/DashboardScreen'
import { SocketContext } from '../../context/socket';

export const PublicScreen = () => {
    const socket = useContext(SocketContext);
    const screen = ['6113e4932f27de7f03cd1741', '611593fc7a29769c3616586e']
    const [tickets, setTickets] = useState([])

    socket.on('queues-change', (queueBack, ticket) => {
        if (screen.includes(queueBack._id)) {
            ticket.prefix = queueBack.name
            setTickets([...tickets, ticket])
        }
    })


    return (
        <DashboardScreen keySelected="2">
            {
                tickets.map(ticket => {
                    return (
                        <div key={ticket._id}>
                            <h4>{`Número: ${ticket.prefix}${ticket.number}`}</h4>
                            <h2>{ticket.screen}</h2>
                        </div>
                    )
                })
            }
        </DashboardScreen>
    )
}
