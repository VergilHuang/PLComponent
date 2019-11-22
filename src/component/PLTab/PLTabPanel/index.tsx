import React, { FC, useEffect, useState, ReactNode } from 'react';
export type PLTabPanelProps = {
    identifier: string | number,
    tab: ReactNode | string
}

export const PLTabPanel: FC<PLTabPanelProps> = (props) => {

    return (
        <div className="pl-tab-panel-container">
            {props.children}
        </div>
    )
}
export default PLTabPanel;