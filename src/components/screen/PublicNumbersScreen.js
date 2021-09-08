import React, { useState } from 'react'
import { Col, Row } from 'antd';
import useBodyClass from '../../hook/useBodyClass';
import * as dayjs from 'dayjs';

export const PublicNumbersScreen = ({ tickets, name }) => {
    useBodyClass('public-screen-body');
    const [time, setTime] = useState(dayjs().format('HH:mm'))

    const timeChange = () => {
        setTime(dayjs().format('HH:mm'))
    }

    setInterval(timeChange, 60000)

    return (
        <>
            <Row className="ps-header-container" justify="space-between">
                <span>{time}</span>
                <span>{name}</span>
                <span>{dayjs().format('d/M/YYYY')}</span>
            </Row>
            <Row className="ps-content-container" justify="space-around" align="middle">
                <Col span={12} className="ps-img-container">
                    <img
                        alt="scenerys"
                        className="ps-img"
                        src="https://ladefinicion.com/wp-content/uploads/2019/08/paisaje-natural.jpg" />
                </Col>
                <Col span={12} className="ps-content-list-numbers">
                    {
                        tickets.map((ticket, index) => {
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
