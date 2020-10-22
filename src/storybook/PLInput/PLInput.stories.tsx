import React from 'react';
import './style.sass';
import PLInput, { PLInputOptionProps } from '../../components/PLInput';
// import PrefixItem from '../../component/PrefixItem';

export default {
    component: PLInput,
    title: 'PLInput'
};

export const defaultInput = () => <PLInput placeholder="text here" />

export const withLabelAnimation = () => (
    <>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"Name:"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"Age:"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"Phone Number:"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"Address:"} />
        </div>
    </>
)

const options: PLInputOptionProps = {
    rules: [{
        message: "只能輸入長度6以下的中文字",
        maxLength: 5
    }]
}
export const withLabelAnimationAndValidation = () => (
    <>
        <div style={{ paddingTop: 28 }}>
            <PLInput options={options} holderLabel={"Name:"} defaultValue={"abcdefgh"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"Age:"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"Phone Number:"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"Address:"} />
        </div>
    </>
)

// export const withFixedLabelAndValidation = () => (
//     <>
//         <PrefixItem item="Name:" prefixWidth={"4rem"}>
//             <PLInput options={options} placeholder={"請輸入姓名"} defaultValue={"abcdefgh"} />
//         </PrefixItem>
//         <PrefixItem item="Age:" prefixWidth={"4rem"}>
//             <PLInput placeholder={"請輸入身高"} />
//         </PrefixItem>
//         <PrefixItem item="Phone:" prefixWidth={"4rem"}>
//             <PLInput placeholder={"請輸入電話"} />
//         </PrefixItem>
//         <PrefixItem item="Address:" prefixWidth={"4rem"}>
//             <PLInput placeholder={"請輸入住址"} />
//         </PrefixItem>
//     </>
// )
