import React, { useState } from "react";
import Label from "./Label";
import SettingsInput from "./SettingsInput";

function LabelInput2({
  text,
  placeholder,
  type,
  onChange,
  input_value,
  label_style = "font-semibold text-base text-primary",
  input_style = "w-full py-1 border border-lighter px-2 rounded-extra_small focus:outline-none focus:ring-2 ring-[#d6d6d6]",
}) {
  return (
    <div className="gap-1 flex-1 flex flex-col items-start justify-center w-full">
      <Label text={text} class_name={label_style} />
      <SettingsInput
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        class_name={input_style}
        value={input_value}
      />
    </div>
  );
}

export default LabelInput2;
