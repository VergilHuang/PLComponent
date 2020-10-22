import React, { useState, FC } from "react";
import "./style.sass";
import PLTab from "../../components/PLTab";
import $$ from "../../utils/utils";
import PLTabPanel from "../../components/PLTab/PLTabPanel";
import PLButton from "../../components/PLButton";
import Reminder from "../../components/Reminder";

export default {
  component: PLTab,
  title: "PLTab",
};
enum WeekEnum {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6,
}

const tempData: { [key: number]: string } = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesda",
  3: "Thursday",
  4: "Friday",
  5: "Saturday ",
  6: "Sunday",
};

const DefaultTab: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(WeekEnum.Monday);

  return <>
    <Reminder >
      Capable do highly flexibility customization.
    </Reminder>

    <div className="tab-container">
      <PLTab
        defaultActiveIndex={WeekEnum.Monday}
        buttomContainerClass="cust-container"
        needDivider={false}
      >
        {$$.getEnumValue(WeekEnum).map((val) => {
          return (
            <PLTabPanel
              key={val}
              identifier={val}
              tab={
                <PLButton
                  needRipple={false}
                  className={`${val === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(val)}
                >
                  {WeekEnum[val]}
                </PLButton>
              }
            >
              {/* per tab's content */}
              {tempData && tempData[val]}
            </PLTabPanel>
          );
        })}
      </PLTab>
    </div>
  </>
};

export { DefaultTab };
