import React, { useContext, useState, useEffect } from 'react'
import { DashboardScreen } from '../dashboard/DashboardScreen'
import { SocketContext } from '../../context/socket';
import { SelectQueues } from './SelectQueues';
import { Divider, Row } from 'antd';
import { PublicNumbersScreen } from './PublicNumbersScreen';

export const PublicScreen = () => {
    const socket = useContext(SocketContext);
    const [tickets, setTickets] = useState([])
    const [queuesTrace, setQueuesTrace] = useState(['6113e4932f27de7f03cd1741', '611593fc7a29769c3616586e', '61253a752863e2618c3527c6'])

    useEffect(() => {
        socket.on('queues-change', (queueBack, ticket = null) => {
            if (queuesTrace.includes(queueBack._id) && ticket) {
                ticket.prefix = queueBack.name
                if(tickets.length > 5){
                    tickets.splice(-1,1)
                }
                setTickets([ticket, ...tickets])
            }
        })
        return () => {
            socket.off()
        }
    }, [socket, tickets])


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
