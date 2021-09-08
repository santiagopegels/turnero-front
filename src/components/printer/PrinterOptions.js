import React from 'react'
import { Row, Button } from 'antd'

export const PrinterOptions = ({queues, handleQueueSelected}) => {
    return (
        <div>
            {
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
                }
        </div>
    )
}
