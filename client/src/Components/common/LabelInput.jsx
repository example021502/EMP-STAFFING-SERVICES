import React, { useMemo } from "react";
import Label from "./Label";
import TextInput from "./TextInput";

function LabelInput({ text, placeholder }) {
  const formattedId = useMemo(() => {
    return text
      .replace(/[()]/g, "")
      .trim()
      .split(/\s+/)
      .join("_")
      .toLowerCase();
  }, [text]);

  const placeholderValue = placeholder?.[formattedId] || "";

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center justify-between w-full min-h-[44px]">
      <Label
        htmlFor={formattedId}
        text={text}
        class_name="font-semibold text-base text-primary font-inter whitespace-nowrap cursor-pointer"
      />

      <div className="w-full sm:max-w-[300px] ml-auto">
        <TextInput id={formattedId} placeholder={placeholderValue} />
      </div>
    </div>
  );
}

export default LabelInput;
