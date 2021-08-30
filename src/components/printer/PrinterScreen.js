import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queuesStartLoading } from '../../actions/queues'
import { Button, Row } from 'antd'
import { socket } from '../../context/socket'

export const PrinterScreen = () => {
    const [showPrintMessage, setShowPrintMessage] = useState(false)
    const [number, setNumber] = useState(null)
    const { queues } = useSelector(state => state.queue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])

    const handleQueueSelected = ({ _id: id }) => {

        socket.emit('new-ticket', { queueId: id }, ({ status, message, queue }) => {
            if (status) {
                setNumber(`${queue.name}${queue.lastNumber}`)
                setShowPrintMessage(true)
                setTimeout(() => {
                    setShowPrintMessage(false)
                }, 4000);
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
                            <Row justify="center" key={queue._id}>
                                <Button type="primary" onClick={() => handleQueueSelected(queue)}>{queue.description ? queue.description : queue.name}</Button>
                            </Row>
                        )
                    })
                    :
                    <h2>Usted será llamado por el número {number}</h2>
            }
        </>
    )
}
