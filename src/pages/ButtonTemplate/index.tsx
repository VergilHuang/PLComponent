import React, { FC, useEffect, useState } from 'react';
import PLButton from '../../component/PLButton';
type Props = {

}

const ButtonTemplate: FC<Props> = (props) => {

    useEffect(() => {


    }, [])
    return (
        <div className="container center">
            <PLButton style={{
                backgroundColor: "rgb(55,55,55)",
                border: "1px solid #9300FF",
                color: "#fff"
            }}>
                很大的按鈕
            </PLButton>
        </div>
    );
};

export default ButtonTemplate;