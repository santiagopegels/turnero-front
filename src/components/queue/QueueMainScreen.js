import React, { useEffect } from 'react'

import { QueueCard } from './QueueCard';
import { Row, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { queuesStartLoading } from '../../actions/queues'


export const QueueMainScreen = () => {

    const { queues } = useSelector(state => state.queue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])


    return (
        <>
            <Row justify="space-around">
                Filas
            </Row>
            <Divider />
            <Row justify="space-around">

                {
                    queues.map(queue => (
                        <QueueCard
                            q={queue}

                            key={queue._id}
                        ></QueueCard>
                    ))
                }

            </Row>
        </>
    )
}
