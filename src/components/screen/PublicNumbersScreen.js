import React from 'react'
import { Col, Row } from 'antd';
import useBodyClass from '../../hook/useBodyClass';

export const PublicNumbersScreen = ({ tickets }) => {
    useBodyClass('public-screen-body');

    return (
        <>
            <Row className="ps-header-container" justify="space-between">
                <span>14:56HS 34°</span>
                <span>PASILLO</span>
                <span>12/12/2009</span>
            </Row>
            <Row className="ps-content-container" justify="space-around" align="middle">
                <Col span={12} className="ps-img-container">
                    <img
                        className="ps-img"
                        src="https://ladefinicion.com/wp-content/uploads/2019/08/paisaje-natural.jpg" />
                </Col>
                <Col span={12} className="ps-content-list-numbers">
                    {
                        tickets.map((ticket, index) => {
                            console.log(index)
                            console.log(tickets.length)
                            return (
                                <div className={
                                    (index === 0)
                                    ?
                                    "ps-number-call zoom-effect"
                                    :
                                    "ps-number-call"
                                }
                                    key={ticket._id}
                                >
                                    <span>{ticket.screen}</span>
                                    <span className="ps-number-divider"></span>
                                    <span>{`${ticket.prefix}${ticket.number}`}</span>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </>
    )
}
