/*
    處理PLInput的validation message顯示
*/

import React, { FC } from 'react'
import './style.sass'

export interface PLCallbackMessageProps {
    show: boolean,
    type?: 'danger' | 'warning',
    message: string
}


const CallbackMessage: FC<PLCallbackMessageProps> = (props) => {

    return (
        <span className={`pl-callback-msg ${props.show ? 'active' : ''} ${props.show ? props.type : ''}`}>
            {props.message}
        </span>
    )
}

export default CallbackMessage