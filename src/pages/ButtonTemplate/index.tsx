import React, { FC, useEffect, useState } from 'react';
import PLButton from '../../component/PLButton';
type Props = {

}

const ButtonTemplate: FC<Props> = (props) => {

    return (
        <div className="container center" style={{ backgroundColor: '#000', padding: 8 }}>
            <PLButton style={{
                backgroundColor: "rgb(55,55,55)",
                border: "1px solid #9300FF",
                color: "#fff",
                boxShadow: '0 0 16px 2px rgb(168, 53, 252)'
            }}>
                很大的按鈕
            </PLButton>
        </div>
    );
};

export default ButtonTemplate;