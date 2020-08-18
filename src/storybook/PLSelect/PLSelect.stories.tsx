import React from "react";
import PLSelect from "../../component/PLSelect";

export default {
  component: PLSelect,
  title: "PLSelect",
};

export const DefaultSelect = () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        This contains native Select tag, can completly support mobile browser
        use.
      </div>
      <PLSelect holderLabel="choose your option">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </PLSelect>
    </>
  );
};
