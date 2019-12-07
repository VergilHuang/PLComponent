import React from 'react';
// import { action } from '@storybook/addon-actions'
import PLInput, { PLInputOptionProps } from '.';
import PrefixItem from '../PrefixItem';

export default {
    component: PLInput,
    title: 'PLInput'
};

export const defaultInput = () => <PLInput placeholder="text here" />
export const withLabelAnimation = () => (
    <>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"姓名"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"身高"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"電話"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"住址"} />
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
            <PLInput options={options} holderLabel={"姓名"} defaultValue={"abcdefgh"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"身高"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"電話"} />
        </div>
        <div style={{ paddingTop: 28 }}>
            <PLInput holderLabel={"住址"} />
        </div>
    </>
)

export const withFixedLabelAndValidation = () => (
    <>
        <PrefixItem item="姓名:" prefixWidth={"3rem"}>
            <PLInput options={options} placeholder={"請輸入姓名"} defaultValue={"abcdefgh"} />
        </PrefixItem>
        <PrefixItem item="身高:" prefixWidth={"3rem"}>
            <PLInput placeholder={"請輸入身高"} />
        </PrefixItem>
        <PrefixItem item="電話:" prefixWidth={"3rem"}>
            <PLInput placeholder={"請輸入電話"} />
        </PrefixItem>
        <PrefixItem item="住址:" prefixWidth={"3rem"}>
            <PLInput placeholder={"請輸入住址"} />
        </PrefixItem>
    </>
)
