import React from 'react'
import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import warning from '../../img/warning-sign.png'

function Alert() {
    const {alert} = useContext(AlertContext)

    return (
        alert !== null && (
            <p className="flex items-start mb-4 space-x-2">
                {alert.type === 'error' && (
                  <img src = {warning} />
                )}
            </p>
        )
    )
}

export default Alert