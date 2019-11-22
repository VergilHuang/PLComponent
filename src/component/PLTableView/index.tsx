import React, { ReactNode } from 'react';
import './style.sass';

export interface PLColumnProps<T = {}> {
    key: string,
    title: string | ReactNode,
    dataKey: string,
    render?: (value: any, rowData: T) => ReactNode
}

type Props<T> = {
    rowKey?: string;
    datasource: T[],
    columns: PLColumnProps<T>[]
}

function PLTableView<T = any>(props: Props<T>) {

    return (
        <table className="responsive-tableview">
            <thead>
                <tr>
                    {
                        props.columns.map(col => {
                            return <th key={col.key}>{col.title}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.datasource.map((item, index) => {
                        return (
                            <tr key={props.rowKey ? (item as any)[props.rowKey] : index}>
                                {
                                    props.columns.map(col => {
                                        return (
                                            <td key={col.key}>
                                                <div className="prefix-label">{col.title}</div>
                                                <div className="td-content">
                                                    {
                                                        col.render ? col.render(item[col.dataKey as keyof T], item) : item[col.dataKey as keyof T]
                                                    }
                                                </div>
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    );
};

export default PLTableView;

