import React, { FC } from 'react'
import './style.sass'
import Overlay from '../Overlay'

type Props = {
    active?: boolean
    onClose?: () => void
}
const NavigationSideBar: FC<Props> = (props) => {

    const onOverlayClick = () => {
        props.onClose && props.onClose();
    }
    return (
        <>
            <nav className={`navigation-sidebar-container ${props.active ? "sidebar-show" : "sidebar-hide"}`}>
                <ul className={`sidebar-list ${props.active ? "sidebar-list-show" : "sidebar-list-hide"}`}>
                    <li className="sidebar-list-item">list</li>
                    <li className="sidebar-list-item">list</li>
                    <li className="sidebar-list-item">list</li>
                    <li className="sidebar-list-item">list</li>
                    <li className="sidebar-list-item">list</li>
                    <li className="sidebar-list-item">list</li>
                </ul>
            </nav>
            <Overlay show={props.active} onClick={onOverlayClick} />
        </>
    )
}

export default NavigationSideBar
