import { Card, Button, Divider, Row, Col } from 'antd';
import React from 'react'

export const QueueCard = ({ queue, handleNextTicket, actualNumber }) => {

    return (
        <Card
            title={queue.description ? queue.description : queue.name}
            className="queue-card-container"
            headStyle={{ 'fontSize': '2em', 'justifyContent': 'center', 'display': 'flex' }}

        >
            <Row>
                <Col span={12} style={{ 'display': 'flex', 'justifyContent': 'center', 'flexDirection': 'column' }}>
                    <p className="queue-card-body-title-text">
                        Total: <span className="queue-card-body-info-text">{queue.lastNumber}</span>
                    </p>
                    <p className="queue-card-body-title-text">
                        Atendidos: <span className="queue-card-body-info-text">{queue.ticketsAttended.length}</span>
                    </p>
                    <p className="queue-card-body-title-text">
                        Pendientes: <span className="queue-card-body-info-text">{queue.tickets.length}</span>
                    </p>
                </Col>
                <Col
                    span={12}
                    className="queue-card-body-actual-number-container"
                >
                    <p className="queue-card-body-actual-number-text">{`${queue.name}${actualNumber}`}</p>
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