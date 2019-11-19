import React, { FC } from 'react'
import './style.sass'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import routeConfig from '../../model/router/routeConfig'

type Props = {
    onMenuClick: () => void
} & RouteComponentProps
const NavigationHead: FC<Props> = (props) => {

    return (
        <nav className="navigation-head-container container">
            <button onClick={props.onMenuClick}>Menu</button>
            <ul className="navigation-link-container">
                {
                    routeConfig.map(route => {
                        return <li key={route.key} className="navigation-link-item">
                            <a onClick={() => props.history.push(route.path as string)}>{route.name}</a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}


export default withRouter(NavigationHead)