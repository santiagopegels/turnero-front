import { Card, Button, Divider, Row, Col } from 'antd';
import React, { useContext, useState } from 'react'
import { SocketContext } from '../../context/socket';

export const QueueCard = ({ q, place }) => {
    const [queue, setQueue] = useState(q)
    const [actualNumber, setActualNumber] = useState(q.ticketsAttended.length > 0 ? q.ticketsAttended[q.ticketsAttended.length - 1].number : 0)
    const socket = useContext(SocketContext);
    const screen = place.name

    socket.on('queues-change', (queueBack, ticket = null) => {
        console.log('algo')
        if (queueBack._id === queue._id) {
            setQueue(queueBack)
            if (ticket) {
                setActualNumber(ticket.number)
            }
        }
    })

    const handleNextTicket = () => {
        socket.emit('next-ticket', { queueId: queue._id, screen }, ({ status, message, ticket, queue }) => {
            if (status) {
                setActualNumber(ticket.number)
                setQueue(queue)
            } else {
                console.log('next ticket error', message)
            }
        })
    }

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
                onClick={handleNextTicket}
                size="large"
            >
                LLAMAR SIGUIENTE
                </Button>
        </Card>
    )
}