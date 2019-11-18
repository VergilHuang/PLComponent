import React, { FC, useEffect, useState } from 'react';
import Overlay from '../Overlay';
type Props = {
    visible?: boolean
    onOK: () => void,
    onClose: () => void
}

const PLModal: FC<Props> = (props) => {

    useEffect(() => {
        if (props.visible) {
            props.onClose && props.onClose();
        }

    }, [props.visible])

    return (
        <Overlay show={props.visible} onClick={() => { }}>

        </Overlay>
    );
};

export default PLModal;