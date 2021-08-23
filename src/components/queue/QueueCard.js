import { Card, Button, Divider, Row, Col } from 'antd';
import React from 'react'

export const QueueCard = ({ prefix, last, pending }) => {

    return (
        <Card title={`Prefijo: ${prefix}`} style={{ width: 300, margin: 5 }}>
            <Row>
                <Col span={12}>
                    <p>Total: <Button type="primary">{last + pending}</Button></p>
                    <p>Atendidos: <Button type="primary">{last}</Button></p>
                    <p>Pendientes: <Button type="primary">{pending}</Button></p></Col>
                <Col span={12}>Actual: {`${prefix}${last}`}</Col>
            </Row>
            <Divider />
            <Button block type="primary">Llamar Siguiente</Button>
        </Card>
    )
}