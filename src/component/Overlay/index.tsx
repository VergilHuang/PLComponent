import React, { FC } from 'react'
import './style.sass'

type Props = {
    show?: boolean,
    onClick?: () => void
}

const Overlay: FC<Props> = (props) => {

    return (
        <div className={`overlay-boundery ${props.show ? "overlay-show" : "overlay-hide"}`} onClick={props.onClick}>

        </div>
    )
}

export default Overlay
