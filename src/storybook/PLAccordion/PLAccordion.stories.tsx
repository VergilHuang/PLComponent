import React from "react";
import PLAccordion from "../../components/PLAccordion";
import { AccordionItemDataInterface } from "../../model/interfaces";

export default {
    component: PLAccordion,
    title: "PLAccordion"
}

const items: AccordionItemDataInterface[] = [{
    dataKey: 1,
    title: "title1",
    description: "description1"
}, {
    dataKey: 2,
    title: "title2",
    description: "description2"
}, {
    dataKey: 3,
    title: "title3",
    description: "description3"
}]

export const defaultAccordion = () => <PLAccordion datasource={items} />