import React, { FC } from 'react';
import "./style.sass";

interface Props {
    className?: string;
    style?: any;
    float?: boolean;
    alignment?: "right" | "center" | "left"
}

const alignMap = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center'
}

const ToolBar: FC<Props> = (props) => {

    let _alignment = 'flex-start';
    if (props.alignment) {
        _alignment = alignMap[props.alignment]
    }

    return (
        props.float ?
            <div className={`tool-action-box-float ${props.className ? props.className : ""}`} style={props.style}>
                <div className={`tool-action-list-float-${props.alignment ? props.alignment : "right"}`}>
                    {props.children}
                </div>
            </div>
            :
            <div
                className={`tool-action-box ${props.className ? props.className : ""}`}
                style={{
                    justifyContent: _alignment,
                    ...props.style
                }}>
                <div className="tool-action-list">
                    {props.children}
                </div>
            </div>
    );
};



export default ToolBar;
