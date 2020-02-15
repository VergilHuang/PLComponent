import React, { FC } from 'react';
import './style.sass'
import Overlay from '../Overlay';
import PLButton from '../PLButton';
import ToolBar from '../ToolBar';
type Props = {
    visible?: boolean,
    needHeader?: boolean,
    needFooter?: boolean,
    title?: string,
    onOK?: () => void,
    onCancel?: () => void,
    onCloseClick?: () => void,
    onOverlayClcik?: () => void,
    style?: React.CSSProperties,
    className?: string
}

const PLModal: FC<Props> = React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {

    const onOverlayClick = () => {
        props.onOverlayClcik && props.onOverlayClcik()
    }

    const handleCancel = () => {
        props.onCancel && props.onCancel()
    }

    const handleOk = () => {
        props.onOK && props.onOK()
    }

    const handleCloseClick = () => {
        props.onCloseClick && props.onCloseClick()
    }

    return (
        <div className="pl-modal-container">
            <div ref={ref} className={`pl-modal-box  ${props.visible ? 'pop-up' : 'pop-out'} ${props.className}`} style={props.style}>
                {props.needHeader !== false &&
                    <div className="pl-modal-box-head">
                        <h3 className="pl-modal-box-head-title">{props.title ? props.title : ""}</h3>
                    </div>
                }
                <div className="pl-modal-box-body">
                    {props.children}
                </div>
                {props.needFooter !== false &&
                    <div className="pl-modal-box-footer">
                        <ToolBar alignment="right">
                            {
                                (() => (<>
                                    {props.onCancel && <PLButton className="pl-modal-cancel-btn" onClick={handleCancel}>取消</PLButton>}
                                    {props.onOK && <PLButton className="pl-modal-confirm-btn" onClick={handleOk}>確認</PLButton>}
                                </>)
                                )()
                            }
                        </ToolBar>
                    </div>
                }

                <a className="pl-close-btn" onClick={handleCloseClick} ></a>
            </div>
            <Overlay show={props.visible} onClick={onOverlayClick} />
        </div>
    );
});

export default PLModal;