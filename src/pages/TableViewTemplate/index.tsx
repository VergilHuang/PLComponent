import React, { FC } from 'react';
import PLTableView, { PLColumnProps } from '../../components/PLTableView';
type Props = {

}

const dataMap: MapInterface[] = [{
    name: "Vergil",
    age: 18,
    sex: "boy"
}, {
    name: "Linda",
    age: 18,
    sex: "girl"
}]

interface MapInterface {
    name: string,
    age: number,
    sex: string
}

const columns: PLColumnProps<MapInterface>[] = [{
    title: "名称",
    dataKey: "name",
    key: "name",
    render: (value, rowData) => <span style={{ color: "red" }}>{rowData.name}</span>
}, {
    title: "年龄",
    dataKey: "age",
    key: "age"
}, {
    title: "性别",
    dataKey: "sex",
    key: "sex"
}]

const TableViewTemplate: FC<Props> = (props) => {

    return (
        <div style={{ padding: "10vh 15px" }}>
            <PLTableView<MapInterface>
                columns={columns}
                datasource={dataMap}
                rowKey={"name"}
            />
        </div>
    );
};

export default TableViewTemplate;