import React from "react";
import PLSelect from "../../component/PLSelect";
import Reminder from "../../component/Reminder";

export default {
  component: PLSelect,
  title: "PLSelect",
};

export const DefaultSelect = () => {
  return (
    <>
      <Reminder>
        This contains native Select tag, can completly support mobile browser
        use.
      </Reminder>
      <PLSelect holderLabel="choose your option">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </PLSelect>
    </>
  );
};
