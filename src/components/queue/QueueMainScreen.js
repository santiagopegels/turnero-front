import React, { useEffect } from 'react'
import { QueueCard } from './QueueCard';
import { Row, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { queuesStartLoading } from '../../actions/queues'
import { CreateQueueModal } from './CreateQueueModal';
import { DashboardScreen } from '../dashboard/DashboardScreen';


export const QueueMainScreen = () => {

    const { queues } = useSelector(state => state.queue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])
    

    return (
        <DashboardScreen keySelected="1">
            <Row justify="center">
                Filas
            <CreateQueueModal />
            </Row>
            <Divider />
            <Row justify="center">

                {
                    queues.map(queue => (
                        <QueueCard
                            q={queue}

                            key={queue._id}
                        ></QueueCard>
                    ))
                }

            </Row>
        </DashboardScreen>
    )
}
