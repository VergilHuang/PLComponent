import React, { FC } from 'react'
import './style.sass'
import { Link, Redirect } from 'react-router-dom'

type Props = {
    onMenuClick: () => void
}
const NavigationHead: FC<Props> = (props) => {


    return (
        <nav className="navigation-head-container container">
            <button onClick={props.onMenuClick}>Menu</button>
            <Redirect from="/" to="/model"></Redirect>
            <Link to="/rwdGrid">Rwd-Grid</Link>
            -
            <Link to="/tableView">TableView</Link>
            -
            <Link to="/model">Model</Link>
        </nav>
    )
}


export default NavigationHead