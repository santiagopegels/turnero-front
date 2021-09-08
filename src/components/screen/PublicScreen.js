import React, { useContext, useState, useEffect } from 'react'
import { DashboardScreen } from '../dashboard/DashboardScreen'
import { SocketContext } from '../../context/socket';
import { SelectQueues } from './SelectQueues';
import { Divider, Row } from 'antd';
import { PublicNumbersScreen } from './PublicNumbersScreen';
import { useSelector, useDispatch } from 'react-redux';
import { queuesStartLoading } from '../../actions/queues';

export const PublicScreen = () => {
    const socket = useContext(SocketContext);
    const [tickets, setTickets] = useState([])
    const [queuesTrace, setQueuesTrace] = useState([])
    const [nameScreen, setNameScreen] = useState('')
    const [data, setData] = useState([]);
    const { queues } = useSelector(state => state.queue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])
   
    useEffect(() => {
        const data = queues.map(({ _id: key, name: title, description }) => {
            if (description) {
                title = description + '-' + title
            }
            return { key, title, description }
        })
        setData(data)
    }, [queues])

    const handlePublicScreenData = ({ queues, name }) => {
        setQueuesTrace(queues)
        setNameScreen(name)
    };

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
                        <SelectQueues onFinish={handlePublicScreenData} data={data} />
                    </DashboardScreen>
                    :
                    <PublicNumbersScreen tickets={tickets} name={nameScreen} />
            }
        </>

    )
}
