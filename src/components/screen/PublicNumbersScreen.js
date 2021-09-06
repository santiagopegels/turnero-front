import React from 'react'
import { Col, Row, Divider } from 'antd';

export const PublicNumbersScreen = ({ tickets }) => {

    return (
        <>
            <Row className="ps-header-container" justify="space-between">
                <span>14:56hs 34°</span>
                <span>PASILLO</span>
                <span>12/12/2009</span>
            </Row>
            <Row Row className="ps-content-container" justify="space-around" align="center">
                <Col span={12} className="ps-img-container">
                    <img
                        className="ps-img"
                        src="https://ladefinicion.com/wp-content/uploads/2019/08/paisaje-natural.jpg" />
                </Col>
                <Col span={12} className="ps-content-list-numbers">
                    <div className="ps-number-call zoom-effect">
                    <span>Cajero 1</span>
                    <span className="ps-number-divider"></span>
                    <span>M13</span>
                    </div>
                    <div className="ps-number-call">
                    <span>Cajero 1</span>
                    <span className="ps-number-divider"></span>
                    <span>M13</span>
                    </div>
                    <div className="ps-number-call">
                    <span>Cajero 1</span>
                    <span className="ps-number-divider"></span>
                    <span>M13</span>
                    </div>
                    <div className="ps-number-call">
                    <span>Cajero 1</span>
                    <span className="ps-number-divider"></span>
                    <span>M13</span>
                    </div>
                    <div className="ps-number-call">
                    <span>Cajero 1</span>
                    <span className="ps-number-divider"></span>
                    <span>M13</span>
                    </div>
                </Col>
            </Row>
            {
                tickets.map(ticket => {
                    return (
                        <div key={ticket._id}>
                            <h4>{`Número: ${ticket.prefix}${ticket.number}`}</h4>
                            <h2>{ticket.screen}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}
