import PLTableView, { PLColumnProps } from "../../component/PLTableView";
import React from "react";
import Reminder from "../../component/Reminder";

export default {
  component: PLTableView,
  title: "PLTableView",
};

interface MapInterface {
  name: string;
  age: number;
  sex: string;
  selectable?: boolean;
}

const dataMap: MapInterface[] = [
  {
    name: "Vergil",
    age: 18,
    sex: "boy",
  },
  {
    name: "Linda",
    age: 18,
    sex: "girl",
    selectable: false,
  },
];

const columns: PLColumnProps<MapInterface>[] = [
  {
    key: "name",
    title: "name",
    dataKey: "name",
    render: (value, rowData) => (
      <span style={{ color: "red" }}>{rowData.name}</span>
    ),
  },
  {
    key: "age",
    title: "age",
    dataKey: "age",
  },
  {
    key: "sex",
    title: "sex",
    dataKey: "sex",
  },
];

export const defaultTableView = () => {
  return <>
    <Reminder>
      RWD design, transform a table component into card list structure.
      <span style={{ color: "red" }}>No complete.</span>
    </Reminder>
    <PLTableView<MapInterface>
      datasource={dataMap}
      columns={columns}
      selectableStateName="selectable"
      onRowClick={(item) => {
        console.log(item);
      }}
    />
  </>
};
