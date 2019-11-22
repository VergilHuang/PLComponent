import React, { FC, useEffect, useState } from 'react';
import './style.sass'
import Overlay from '../Overlay';
import PLButton from '../PLButton';
import PrefixItem from '../PrefixItem';
import ToolBar from '../ToolBar';
type Props = {
    visible?: boolean,
    title?: string,
    onOK?: () => void,
    onCancel?: () => void,
    onOverlayClcik?: () => void
}

const PLModal: FC<Props> = (props) => {

    const onOverlayClick = () => {
        props.onOverlayClcik && props.onOverlayClcik()
    }

    const handleCancel = () => {
        props.onCancel && props.onCancel()

    }

    const handleOk = () => {
        props.onOK && props.onOK()

    }

    return (
        <div className="pl-modal-container">
            <div className={`pl-modal-box  ${props.visible ? 'pop-up' : 'pop-out'}`}>
                <div className="pl-modal-box-head">
                    <h3 className="pl-modal-box-head-title">{props.title ? props.title : ""}</h3>
                </div>
                <div className="pl-modal-box-body">
                    {props.children}
                </div>
                <div className="pl-modal-box-footer">
                    <ToolBar alignment="right">
                        <PLButton className="pl-modal-confirm-btn" onClick={handleOk}>確認</PLButton>
                        <PLButton className="pl-modal-cancel-btn" onClick={handleCancel}>取消</PLButton>
                    </ToolBar>
                </div>
            </div>
            <Overlay show={props.visible} onClick={onOverlayClick} />
        </div>
    );
};

export default PLModal;