import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queuesStartLoading } from '../../actions/queues'
import { Button, Row } from 'antd'
import { socket } from '../../context/socket'
import useBodyClass from '../../hook/useBodyClass'

export const PrinterScreen = () => {
    const [showPrintMessage, setShowPrintMessage] = useState(false)
    const [number, setNumber] = useState(null)
    const { queues } = useSelector(state => state.queue)
    const dispatch = useDispatch()
    useBodyClass('printer-body')

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])

    const handleQueueSelected = ({ _id: id }) => {

        socket.emit('new-ticket', { queueId: id }, ({ status, message, queue }) => {
            if (status) {
                setNumber(`${queue.name}${queue.lastNumber}`)
                setShowPrintMessage(false)
                setTimeout(() => {
                    setShowPrintMessage(false)
                }, 3000);
            } else {
                console.log(message)
            }
        })
    }

    return (
        <>
            {
                !showPrintMessage ?
                    queues.map(queue => {
                        return (
                            <Row
                                justify="center"
                                key={queue._id}
                            >
                                <Button
                                    className="printer-option-button"
                                    type="primary"
                                    onClick={() => handleQueueSelected(queue)}>
                                    {queue.description ? queue.description : queue.name}
                                </Button>
                            </Row>
                        )
                    })
                    :
                    <div className="printer-message-container">
                        <p
                            className="printer-message-default"
                        >
                            Usted será llamado por el número
                    </p>
                    <div className="printer-message-number-container">

                        <span className="printer-message-number">
                            {number}
                        </span>
                    </div>
                    </div>
            }
        </>
    )
}
