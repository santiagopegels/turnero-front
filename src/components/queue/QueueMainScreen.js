import React from 'react'

import { QueueCard } from './QueueCard';
import { Row, Divider } from 'antd';


export const QueueMainScreen = () => {
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
