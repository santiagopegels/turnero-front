import { Card, Button, Divider, Row, Col } from 'antd';


import React from 'react'

export const QueueCard = () => {
    return (
        <Card title="Prefijo: M" style={{ width: 300, margin: 5 }}>
            <Row>
                <Col span={12}>            <p>Total: <Button type="primary green">50</Button></p>
                    <p>Atendidos: <Button type="primary">43</Button></p>
                    <p>Pendientes: <Button type="primary">7</Button></p></Col>
                <Col span={12}>Actual: M44</Col>
            </Row>
            <Divider />
            <Button block type="primary">Llamar Siguiente</Button>
        </Card>
    )
}