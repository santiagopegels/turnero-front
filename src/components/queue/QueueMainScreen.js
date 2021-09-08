import React, { useEffect, useState, useContext } from 'react'
import { QueueCard } from './QueueCard';
import { Row, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { queuesStartLoading } from '../../actions/queues'
import { CreateQueueModal } from './CreateQueueModal';
import { DashboardScreen } from '../dashboard/DashboardScreen';
import { SetNamePlaceModal } from './SetNamePlaceModal';
import { SocketContext } from '../../context/socket';

export const QueueMainScreen = () => {
    const [queuesLocal, setQueuesLocal] = useState([])
    const [isSetNamePlaceModalVisible, setIsSetNamePlaceModalVisible] = useState(true);
    const { queues, place } = useSelector(state => state.queue)
    const socket = useContext(SocketContext);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])

    useEffect(() => {
        setQueuesLocal(queues)
    }, [queues])

    useEffect(() => {
        !place ?
            setIsSetNamePlaceModalVisible(true)
            :
            setIsSetNamePlaceModalVisible(false)
    }, [place])

    useEffect(() => {
        socket.on('queues-change', (queueBack) => {
            const newQueuesArray = queuesLocal.map(queue => {
                return queue._id === queueBack._id ? queueBack : queue;
            });

            setQueuesLocal(newQueuesArray)
        })
        return () => {
            socket.off()
        }
    }, [queuesLocal, socket])

    const handleNextTicket = (id) => {
        socket.emit('next-ticket', { queueId: id, screen: place.name }, ({ status, message, queue: queueBack }) => {
            if (status) {
                const newQueuesArray = queuesLocal.map(queue => {
                    return queue._id === queueBack._id ? queueBack : queue;
                });
                setQueuesLocal(newQueuesArray)
            } else {
                console.log('next ticket error', message)
            }
        })
    }

    return (
        <>
            <SetNamePlaceModal isVisible={isSetNamePlaceModalVisible} />
            <DashboardScreen keySelected="1">
                <Row justify="center" align="center" className="title">
                    Filas
                            <CreateQueueModal />
                </Row>
                <Divider />
                <Row justify="center">

                    {
                        queuesLocal.map(queue => (
                            <QueueCard
                                queue={queue}
                                actualNumber={queue.actualNumber}
                                key={queue._id}
                                handleNextTicket={handleNextTicket}
                            ></QueueCard>
                        ))
                    }

                </Row>
            </DashboardScreen>
        </>
    )
}
