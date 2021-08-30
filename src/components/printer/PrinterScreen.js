import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queuesStartLoading } from '../../actions/queues'
import { Button, Row } from 'antd'

export const PrinterScreen = () => {
    const { queues } = useSelector(state => state.queue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])

    const handleQueueSelected = ({_id:id}) => {

        
    }

    return (
        <>
            {
                queues.map(queue => {
                    return (
                        <Row justify="center"  key={queue._id}>
                            <Button type="primary" onClick={() => handleQueueSelected(queue)}>{queue.description ? queue.description : queue.name}</Button>
                        </Row>
                    )
                })
            }
        </>
    )
}
