import React, { FC, useEffect, PureComponent, Component } from 'react'
import './style.sass'
import Overlay from '../Overlay'
import { createPortal } from 'react-dom';

type Props = {
    active?: boolean
    onClose?: () => void
}

// const CNavigationSideBar: FC<Props> = (props) => {

//     const onOverlayClick = () => {
//         props.onClose && props.onClose();
//     }
//     return (
//         <>
//             <nav className={`navigation-sidebar-container ${props.active ? "sidebar-show" : "sidebar-hide"}`}>
//                 {props.children}
//             </nav>
//             <Overlay show={props.active} onClick={onOverlayClick} />
//         </>
//     )
// }

// export default CNavigationSideBar

const navRoot = document.getElementById('navigation-root') as HTMLElement;

class CNavigationSideBar extends Component<Props> {

    container: Element;
    constructor(props: Props) {
        super(props)
        this.container = document.createElement('div');
    }
    componentDidMount() {
        if (navRoot != null && this.container != null) {
            navRoot.appendChild(this.container);
        }
    }

    componentWillUnmount() {
        if (navRoot != null && this.container != null) {
            navRoot.removeChild(this.container);
        }
    }

    onOverlayClick = () => {
        this.props.onClose && this.props.onClose();
    }

    render() {
        return (
            createPortal(
                <>
                    <nav className={`navigation-sidebar-container ${this.props.active ? "sidebar-show" : "sidebar-hide"}`}>
                        {this.props.children}
                    </nav>
                    <Overlay show={this.props.active} onClick={this.onOverlayClick} />
                </>
                , this.container)
        )
    }
}


export default CNavigationSideBar