import { RouteConfig } from "react-router-config";
import {
    ButtonTemplate,
    InputTemplate,
    ModelTemplate,
    RwdGrid,
    TableViewTemplate,
    TabTemplate
} from '../../pages'

export type GsmRouteConfig = RouteConfig & {
    name: string;
}

const routeConfig: GsmRouteConfig[] = [{
    key: "1",
    name: "rwd-grid",
    path: '/rwd-grid',
    component: RwdGrid,
    exact: true
}, {
    key: "2",
    name: "ButtonTemplate",
    path: '/ButtonTemplate',
    component: ButtonTemplate,
    exact: true
}, {
    key: "3",
    name: "InputTemplate",
    path: '/InputTemplate',
    component: InputTemplate,
    exact: true
}, {
    key: "4",
    name: "ModelTemplate",
    path: '/ModelTemplate',
    component: ModelTemplate,
    exact: true
}, {
    key: "5",
    name: "TableViewTemplate",
    path: '/TableViewTemplate',
    component: TableViewTemplate,
    exact: true
}, {
    key: "6",
    name: "TabTemplate",
    path: '/TabTemplate',
    component: TabTemplate,
    exact: true
}]

export default routeConfig;