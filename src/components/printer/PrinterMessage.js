import React from 'react'

export const PrinterMessage = ({number}) => {
    return (
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
    )
}
