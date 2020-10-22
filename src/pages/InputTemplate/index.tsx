import React, { FC, useEffect, useState } from 'react';
import PLInput from '../../components/PLInput';
type Props = {

}

const InputTemplate: FC<Props> = (props) => {

    useEffect(() => {


    }, [])
    return (
        <div className="container center">
            <PLInput defaultValue="" holderLabel={"請輸入姓名"} options={{
                rules: [{
                    message: '長度不可以超過6',
                    maxLength: 6
                }, {
                    patern: /^[0-9a-zA-Z]*$/,
                    message: "只能輸入英數字"
                }]
            }} />
        </div>
    );
};

export default InputTemplate;