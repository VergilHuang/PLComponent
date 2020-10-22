import React, { FC, useState, useRef, useEffect } from "react";
import "./style.sass";

type Props = {
  holderLabel?: string;
  onValueChange?: (str: string) => void;
} & React.InputHTMLAttributes<HTMLSelectElement>;

const PLSelect: FC<Props> = ({
  className,
  holderLabel,
  onValueChange,
  ...otherProps
}) => {
  const inputRef = useRef<any>(null);
  const [Value, setValue] = useState<string | number | string[]>(
    otherProps.value || otherProps.defaultValue || ""
  );

  useEffect(() => {
    if (otherProps.defaultValue) {
      setValue(otherProps.defaultValue);
    }
  }, [otherProps.defaultValue]);

  return (
    <div
      className={`pl-select-container ${className || ""} ${
        otherProps.disabled ? `disabled` : ""
      }`}
    >
      <select
        ref={inputRef}
        className="pl-select"
        onChange={(e) => {
          setValue(e.target.value);
          onValueChange && onValueChange(e.target.value);
        }}
        {...otherProps}
      >
        {/* {Value ? null : <option></option>} */}
        <option selected disabled>
          {holderLabel || ""}
        </option>
        {otherProps.children}
      </select>
      <span className={`pl-select-arrow`}></span>
      {holderLabel && (
        <span
          className={`pl-select-placeholder ${
            Value.toString().length > 0 ? "offset-up" : ""
          }`}
          onClick={() => (inputRef.current as HTMLInputElement).focus()}
        >
          {holderLabel}
        </span>
      )}
    </div>
  );
};

export default PLSelect;
