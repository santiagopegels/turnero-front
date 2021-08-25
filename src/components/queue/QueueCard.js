import { Card, Button, Divider, Row, Col } from 'antd';
import React, { useContext, useState } from 'react'
import { SocketContext } from '../../context/socket';

export const QueueCard = ({ q }) => {
    const [queue, setQueue] = useState(q)
    const [actualNumber, setActualNumber] = useState(q.ticketsAttended.length > 0 ? q.ticketsAttended[q.ticketsAttended.length - 1].number : 0)
    const socket = useContext(SocketContext);
    const screen = 'Cajero 1'


    socket.on('queues-change', (queueBack) => {
        if (queueBack._id === queue._id) {
            setQueue(queueBack)
        }
    })

    const handleNextTicket = () => {
        socket.emit('next-ticket', { queueId: queue._id, screen }, ({ status, message, ticket }) => {
            if (status) {
                setActualNumber(ticket.number)
            } else {
                console.log(message)
            }
        })
    }

    return (
        <Card title={queue.description ? queue.description : `Prefijo: ${queue.name}`} style={{ width: 300, margin: 5 }}>
            <Row>
                <Col span={12}>
                    <p>Total: <Button type="primary">{queue.lastNumber}</Button></p>
                    <p>Atendidos: <Button type="primary">{queue.ticketsAttended.length}</Button></p>
                    <p>Pendientes: <Button type="primary">{queue.tickets.length}</Button></p>
                </Col>
                <Col span={12}>Actual: {`${queue.name}${actualNumber}`}</Col>
            </Row>
            <Divider />
            <Button
                block 
                type="primary"
                onClick={handleNextTicket}
            >
                Llamar Siguiente
                </Button>
        </Card>
    )
}