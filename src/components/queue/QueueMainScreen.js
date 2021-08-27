import React, { useEffect, useState } from 'react'
import { QueueCard } from './QueueCard';
import { Row, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { queuesStartLoading } from '../../actions/queues'
import { CreateQueueModal } from './CreateQueueModal';
import { DashboardScreen } from '../dashboard/DashboardScreen';
import { SetNamePlaceModal } from './SetNamePlaceModal';


export const QueueMainScreen = () => {

    const { queues, place } = useSelector(state => state.queue)
    const [isSetNamePlaceModalVisible, setIsSetNamePlaceModalVisible] = useState(true);

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(queuesStartLoading())

    }, [dispatch])

    useEffect(() => {
        !place ?
            setIsSetNamePlaceModalVisible(true)
            :
            setIsSetNamePlaceModalVisible(false)
    }, [place])


    return (
        <>
            <SetNamePlaceModal isVisible={isSetNamePlaceModalVisible} />
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
                                place={place}
                                key={queue._id}
                            ></QueueCard>
                        ))
                    }

                </Row>
            </DashboardScreen>
        </>
    )
}
