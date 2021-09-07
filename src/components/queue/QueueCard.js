import { Card, Button, Divider, Row, Col } from 'antd';
import React, { useState, useEffect } from 'react'

export const QueueCard = ({ queue, place, handleNextTicket }) => {
    const [actualNumber, setActualNumber] = useState(queue.ticketsAttended.length > 0 ? queue.ticketsAttended[queue.ticketsAttended.length - 1].number : 0)
    const [localQueue, setLocalQueue] = useState(queue)

    useEffect(() => {
        setActualNumber(queue.ticketsAttended.length > 0 ? queue.ticketsAttended[queue.ticketsAttended.length - 1].number : 0)
        setLocalQueue(queue)
    }, [queue])
    return (
        <Card
            title={localQueue.description ? localQueue.description : localQueue.name}
            className="queue-card-container"
            headStyle={{ 'fontSize': '2em', 'justifyContent': 'center', 'display': 'flex' }}

        >
            <Row>
                <Col span={12} style={{ 'display': 'flex', 'justifyContent': 'center', 'flexDirection': 'column' }}>
                    <p className="queue-card-body-title-text">
                        Total: <span className="queue-card-body-info-text">{localQueue.lastNumber}</span>
                    </p>
                    <p className="queue-card-body-title-text">
                        Atendidos: <span className="queue-card-body-info-text">{localQueue.ticketsAttended.length}</span>
                    </p>
                    <p className="queue-card-body-title-text">
                        Pendientes: <span className="queue-card-body-info-text">{localQueue.tickets.length}</span>
                    </p>
                </Col>
                <Col
                    span={12}
                    className="queue-card-body-actual-number-container"
                >
                    <p className="queue-card-body-actual-number-text">{`${localQueue.name}${actualNumber}`}</p>
                </Col>
            </Row>
            <Divider />
            <Button
                block
                type="primary"
                size="large"
                onClick={() => handleNextTicket(queue._id)}
            >
                LLAMAR SIGUIENTE
                </Button>
        </Card>
    )
}