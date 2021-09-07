import React, { useContext, useState, useEffect } from 'react'
import { DashboardScreen } from '../dashboard/DashboardScreen'
import { SocketContext } from '../../context/socket';
import { SelectQueues } from './SelectQueues';
import { Divider, Row } from 'antd';
import { PublicNumbersScreen } from './PublicNumbersScreen';

export const PublicScreen = () => {
    const socket = useContext(SocketContext);
    const [tickets, setTickets] = useState([])
    const [queuesTrace, setQueuesTrace] = useState([])
    useEffect(() => {
        socket.on('queues-change', (queueBack, ticket = null) => {
            if (queuesTrace.includes(queueBack._id) && ticket) {
                ticket.prefix = queueBack.name
                if(tickets.length > 5){
                    tickets.splice(-1,1)
                }
                setTickets([ticket, ...tickets])
                new Audio('./audio/next-ticket.mp3').play()
            }
        })
        return () => {
            socket.off()
        }
    }, [socket, tickets, queuesTrace])


    const handlePublicScreenData = ({ queues }) => {
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
