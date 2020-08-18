import React, { FC, useMemo, useState, useEffect } from "react";
import { PLTabPanelProps } from "./PLTabPanel";
import PLButton from "../PLButton";
import "./style.sass";

interface Props {
  defaultActiveIndex?: string | number;
  buttomContainerClass?: string;
  contentContainerClass?: string;
  needDivider?: boolean;
}

const PLTab: FC<Props> = (props) => {
  const [ActiveIndex, setActiveIndex] = useState(props.defaultActiveIndex);

  let Panels = React.Children.map(props.children, (thisArg) => {
    if (
      React.isValidElement(thisArg) &&
      typeof thisArg.type === "function" &&
      thisArg.type.name === "PLTabPanel"
    ) {
      return thisArg;
    }
  });

  if (Array.isArray(Panels)) {
    Panels = Panels.filter((component) => component !== undefined);
  }

  // render PLPanel Button
  const buttonRow = React.Children.map(Panels, (thisArg) => {
    // default btn tab
    if (typeof thisArg!.props.tab === "string") {
      return (
        <PLButton
          key={thisArg!.key as string}
          onClick={() => setActiveIndex(thisArg!.props.identifier)}
        >
          {thisArg!.props.tab}
        </PLButton>
      );
    }
    // custom btn tab
    else if (React.isValidElement(thisArg!.props.tab)) {
      // clone element and merge props to new one .
      const tabComponent = thisArg!.props.tab;
      const CustomBtn = React.cloneElement(thisArg!.props.tab, {
        onClick: () => {
          tabComponent.props.onClick && tabComponent.props.onClick();
          setActiveIndex(thisArg!.props.identifier);
        },
      });
      return CustomBtn;
    }
  });

  useEffect(() => {
    setActiveIndex(props.defaultActiveIndex);
  }, [props.defaultActiveIndex]);

  // render PLPanel content
  const contentNode = useMemo(() => {
    if (Panels) {
      return ActiveIndex !== undefined && Panels !== undefined
        ? Panels.find(
          (p: any) => (p.props as PLTabPanelProps).identifier === ActiveIndex
        )
        : Panels[0];
    }
    return null;
  }, [ActiveIndex, Panels]);

  return (
    <div className="pl-tab-container">
      <div
        className={`pl-tab-btn-container ${props.buttomContainerClass || ""}`}
      >
        {buttonRow}
      </div>
      {props.needDivider === true ? <div className="pr" /> : null}
      <div
        className={`pl-tab-content-container ${
          props.contentContainerClass || ""
          }`}
      >
        {contentNode}
      </div>
    </div>
  );
};

export default PLTab;
