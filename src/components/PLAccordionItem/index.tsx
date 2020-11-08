import React, { FC, useEffect, useState } from 'react';
import { AccordionItemDataInterface } from '../../model/interfaces';
import "./style.sass";
type Props = AccordionItemDataInterface & {
    isCollepse?: boolean,
    onPanelClick?: (dataKey: string | number) => void
}

const PLAccordionItem: FC<Props> = ({ isCollepse, onPanelClick, ...itemData }) => {

    return (
        <div className={`accordion-item-container ${!isCollepse ? "expanded" : ""}`}>
            <div className="accordion-item-head" >
                <div className="panel-wrapper" onClick={() => {
                    onPanelClick && onPanelClick(itemData.dataKey)
                }}>
                    <span>{itemData.title}</span>
                </div>
            </div>
            <div className={`accordion-item-body ${isCollepse ? "collepse" : ""}`}>
                <div className="summery-wrapper">
                    <span>{itemData.description}</span>
                </div>
            </div>
        </div>
    );
};

export default PLAccordionItem;