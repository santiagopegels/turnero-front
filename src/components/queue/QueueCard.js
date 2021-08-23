import { Card, Button, Divider, Row, Col } from 'antd';
import React from 'react'

export const QueueCard = ({ prefix, last, pending, attended, actualNumber }) => {
    console.log('actual number',actualNumber)

    return (
        <Card title={`Prefijo: ${prefix}`} style={{ width: 300, margin: 5 }}>
            <Row>
                <Col span={12}>
                    <p>Total: <Button type="primary">{last}</Button></p>
                    <p>Atendidos: <Button type="primary">{attended}</Button></p>
                    <p>Pendientes: <Button type="primary">{pending}</Button></p></Col>
                <Col span={12}>Actual: {`${prefix}${actualNumber}`}</Col>
            </Row>
            <Divider />
            <Button block type="primary">Llamar Siguiente</Button>
        </Card>
    )
}