import React, { FC, useEffect, useState } from 'react';
import { AccordionItemDataInterface } from '../../model/interfaces';
import PLAccordionItem from '../PLAccordionItem';
import "./style.sass";
type Props = {
    datasource: AccordionItemDataInterface[];
}

const PLAccordion: FC<Props> = (props) => {

    const [collepseKey, setCollepseKey] = useState<number | string>();

    return (
        <div className="accodion-container">
            {props.datasource.map((item) => {
                return <PLAccordionItem key={item.dataKey} {...item} isCollepse={collepseKey === item.dataKey ? false : true} onPanelClick={(dataKey) => {
                    setCollepseKey(pre => {
                        if (dataKey === pre) {
                            return undefined
                        } else {
                            return dataKey
                        }
                    })
                }} />
            })}
        </div>
    );
};

export default PLAccordion;