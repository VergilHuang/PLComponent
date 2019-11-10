import React, { FC } from 'react'
import './style.sass'

type Props = {
    onMenuClick: () => void
}
const NavigationHead: FC<Props> = (props) => {


    return (
        <nav className="navigation-head-container container">
            <button onClick={props.onMenuClick}>Menu</button>
        </nav>
    )
}


export default NavigationHead