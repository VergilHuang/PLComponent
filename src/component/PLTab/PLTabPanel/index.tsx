import React, { FC } from "react";
import "./style.sass";

export type PLTabPanelProps = {
  className?: string;
  identifier: string | number;
  tab: React.ReactElement | string;
};

export const PLTabPanel: FC<PLTabPanelProps> = (props) => {
  return (
    <div className={`pl-tab-panel-container ${props.className || ""}`}>
      {props.children}
    </div>
  );
};
export default PLTabPanel;
