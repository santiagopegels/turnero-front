import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queuesStartLoading } from '../../actions/queues'
import { socket } from '../../context/socket'
import useBodyClass from '../../hook/useBodyClass'
import { PrinterMessage } from './PrinterMessage'
import { PrinterOptions } from './PrinterOptions'

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
                setShowPrintMessage(true)
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
                    <PrinterOptions queues={queues} handleQueueSelected={handleQueueSelected}/>
                    :
                    <PrinterMessage number={number} />
            }
        </>
    )
}
