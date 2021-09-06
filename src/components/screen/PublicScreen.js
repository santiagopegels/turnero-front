import React, { useContext, useState } from 'react'
import { DashboardScreen } from '../dashboard/DashboardScreen'
import { SocketContext } from '../../context/socket';
import { SelectQueues } from './SelectQueues';
import { Divider, Row } from 'antd';
import { PublicNumbersScreen } from './PublicNumbersScreen';

export const PublicScreen = () => {
    const socket = useContext(SocketContext);
    const [tickets, setTickets] = useState([])
    const [queuesTrace, setQueuesTrace] = useState(['6113e4932f27de7f03cd1741','611593fc7a29769c3616586e','61253a752863e2618c3527c6'])

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
                    <PublicNumbersScreen tickets={tickets} />
            }
        </>

    )
}
