import React from "react";
import Label from "./Label";
import VariableSelectSalaryRangeInput from "./VariableSelectSalaryRangeInput";

function LabelVariableSalaryRangeSelectInput({ text, placeholder }) {
  const salaryPlaceholder = placeholder?.Salary_range;

  return (
    <fieldset className="flex flex-1 flex-col items-start justify-start gap-2 border-none p-0 m-0 w-full">
      <legend className="contents">
        <Label
          text={text}
          font_size="base"
          font_family="inter"
          color="primary"
          weight="semibold"
          class_name="mb-1 block"
        />
      </legend>

      <div className="w-full flex items-center justify-start min-h-[40px]">
        <VariableSelectSalaryRangeInput placeholder={salaryPlaceholder} />
      </div>
    </fieldset>
  );
}

export default LabelVariableSalaryRangeSelectInput;
