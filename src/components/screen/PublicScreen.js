import React, { useContext, useState } from 'react'
import { DashboardScreen } from '../dashboard/DashboardScreen'
import { SocketContext } from '../../context/socket';
import { SelectQueues } from './SelectQueues';
import { Divider, Row } from 'antd';

export const PublicScreen = () => {
    const socket = useContext(SocketContext);
    const [tickets, setTickets] = useState([])
    const [queuesTrace, setQueuesTrace] = useState([])

    socket.on('queues-change', (queueBack, ticket) => {
        if (queuesTrace.includes(queueBack._id)) {
            ticket.prefix = queueBack.name
            setTickets([...tickets, ticket])
        }
    })
    const handlePublicScreenData = ({ name, queues }) => {
        setQueuesTrace(queues)
    };

    return (
        <>
            {
                !queuesTrace.length > 0
                    ?
                    <DashboardScreen keySelected="2">
                        <Row justify="center" align="center" className="title">
                            Configuración de Pantalla Pública
                        </Row>
                        <Divider />
                        <SelectQueues onFinish={handlePublicScreenData} />
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
