import React, { FC, useMemo, ReactNodeArray, useState, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import PLTabPanel, { PLTabPanelProps } from './PLTabPanel';
import PLButton from '../PLButton';
interface Props {
    activeIndex?: string | number;
}

const PLTab: FC<Props> = (props) => {

    const [ActiveIndex, setActiveIndex] = useState(props.activeIndex)

    let Panels = React.Children.map(props.children, (thisArg) => {
        if (React.isValidElement(thisArg)
            && typeof thisArg.type === 'function'
            && thisArg.type.name === 'PLTabPanel') {
            return thisArg
        }
    })
    if (Array.isArray(Panels)) {
        Panels = Panels.filter(component => component !== undefined);
    }

    // render PLPanel Button
    const buttonRow = useMemo(() => {
        return React.Children.map(Panels, (thisArg) => {
            // default btn tab
            if (typeof thisArg!.props.tab === 'string') {
                return <PLButton key={(thisArg!.key as string)} onClick={() => setActiveIndex(thisArg!.props.identifier)}>{thisArg!.props.tab}</PLButton>
            }
            // custom btn tab
            else if (React.isValidElement(thisArg!.props.tab)) {

                // clone element and merge props to new one .
                const tabComponent = thisArg!.props.tab;
                const CustomBtn = React.cloneElement(thisArg!.props.tab, {
                    onClick: () => {
                        tabComponent.props.onClick && tabComponent.props.onClick();
                        setActiveIndex(thisArg!.props.identifier)
                    }
                });
                return CustomBtn
            }
        })
    }, [])

    // render PLPanel content
    const contentNode = useMemo(() => {
        if (Panels !== undefined) {
            return ActiveIndex !== undefined && Panels !== undefined
                ? Panels.find((p: any) => (p.props as PLTabPanelProps).identifier === ActiveIndex)
                : Panels[0]
        }
        return null
    }, [ActiveIndex])

    return (
        <div className="pl-tab-container">
            <div className="pl-tab-btn center">
                {buttonRow}
            </div>
            <div className="pl-tab-content">
                {contentNode}
            </div>
        </div>
    );
};

export default PLTab