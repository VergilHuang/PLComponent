import React, { ReactNode } from 'react';
import './style.sass';

export interface PLColumnProps<T = {}> {
    key?: string,
    title?: string | ReactNode,
    dataKey?: string,
    render?: (value: any, rowData: T) => ReactNode
}

type Props<T> = {
    rowKey?: keyof T;
    datasource?: T[],
    selectableStateName?: string,
    columns?: PLColumnProps<T>[],
    onRowClick?: (rowData: T) => void
}

//TODO: 處理Safari 100vh 會包含navigation bar 的問題
// https://medium.com/@debbyji/%E8%A7%A3%E6%B1%BA%E9%AB%98%E5%BA%A6100vh%E5%9C%A8safari%E6%89%8B%E6%A9%9F%E4%B8%8A%E7%9A%84%E5%95%8F%E9%A1%8C-7db78417fca1
function PLTableView<T = any>(props: Props<T>) {

    return (
        <table className="pl-tableview-container">
            <thead>
                <tr>
                    {
                        props.columns && props.columns.map(col => {
                            return <th key={col.key}>{col.title}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.datasource &&
                        props.datasource.length > 0 ?
                        props.datasource.map((item, index) => {
                            const selectableAttribute = item[props.selectableStateName as keyof T] === undefined ? true : item[props.selectableStateName as keyof T]
                            const isRowSelectable = selectableAttribute && !!props.onRowClick && typeof props.onRowClick === "function"
                            return (
                                <tr key={props.rowKey ? (item as any)[props.rowKey] : index} className={isRowSelectable ? "clickable" : ""} onClick={() => isRowSelectable && props.onRowClick!(item)}>
                                    {
                                        props.columns ? props.columns.map((col, index) => {
                                            return (
                                                <td key={col.key || index}>
                                                    <div className="prefix-label">{col.title}</div>
                                                    <div className="td-content">
                                                        {
                                                            col.render ? col.render(item[col.dataKey as keyof T], item) : item[col.dataKey as keyof T]
                                                        }
                                                    </div>
                                                </td>
                                            )
                                        }) :
                                            Object.keys(item).map((key) => {
                                                return (
                                                    <td key={key}>
                                                        <div className="prefix-label">{key}</div>
                                                        <div className="td-content">
                                                            {item[key as keyof T]}
                                                        </div>
                                                    </td>
                                                )
                                            })
                                    }
                                </tr>
                            )
                        }) : null
                }
            </tbody>
        </table>
    );
};

export default PLTableView;
