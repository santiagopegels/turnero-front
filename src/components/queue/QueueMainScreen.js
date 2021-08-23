import React, { useEffect } from 'react'

import { QueueCard } from './QueueCard';
import { Row, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { queuesStartLoading } from '../../actions/queues';


export const QueueMainScreen = () => {
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

            <QueueCard ></QueueCard>
            <QueueCard ></QueueCard>
            <QueueCard ></QueueCard>
            <QueueCard ></QueueCard>
            <QueueCard ></QueueCard>
            <QueueCard ></QueueCard>
            <QueueCard ></QueueCard>

        </Row>
        </>
    )
}
