import React, { FC, ReactNode } from 'react';
import './style.sass'
interface Props {
    item: string | number | ReactNode
    itemStyle?: React.CSSProperties
    childrenStyle?: React.CSSProperties
    layout?: "horizental" | "vertical"
    totalWidth?: number | string
    prefixWidth?: number | string
}
const PrefixItem: FC<Props> = ({ item, itemStyle = {}, layout = "horizental", totalWidth = "100%", prefixWidth, children }) => {

    const PreNode = () => {
        if (typeof item === "string" || typeof item === "number") {
            return <label className="prefix-item-label" style={{ color: itemStyle.color }}>{item}</label>
        }
        else {
            return <>{item}</>
        }
    }

    return (
        <div className={`prefix-item-box ${layout}`} style={{ width: totalWidth }}>
            <div className={`prefix-item il-block ${layout === "horizental" && "nowrap"}`} style={{ ...itemStyle, width: prefixWidth ? prefixWidth : itemStyle.width }}>
                <PreNode />
            </div>
            {/* <div className={`prefix-item il-block ${layout === "horizental" && "nowrap"}`} style={{ ...itemStyle, width: prefixWidth ? prefixWidth : itemStyle.width }}> */}
            {children}
            {/* </div> */}
        </div>
    );
};

export default PrefixItem