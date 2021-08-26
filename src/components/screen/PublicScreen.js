import React, { useContext, useState } from 'react'
import { DashboardScreen } from '../dashboard/DashboardScreen'
import { SocketContext } from '../../context/socket';
import { SelectQueues } from './SelectQueues';

export const PublicScreen = () => {
    const socket = useContext(SocketContext);
    const [tickets, setTickets] = useState([])
    const [screens, setScreens] = useState([])

    socket.on('queues-change', (queueBack, ticket) => {
        if (screens.includes(queueBack._id)) {
            ticket.prefix = queueBack.name
            setTickets([...tickets, ticket])
        }
    })


    return (
        <>
            {
                !screens.length > 0 
                ?
                <DashboardScreen keySelected="2">
                    Seleccione las filas
                    <SelectQueues/>
                </DashboardScreen>
                :
                <>
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
                </>
            }
        </>

    )
}
