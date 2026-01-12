import React, { useMemo } from "react";
import { useJobForm } from "../../context/Job_Form_data_authContext";

function TextInput({
  id,
  label,
  type = "text",
  placeholder = "input",
  class_name = "w-full py-2 px-3 border text-sm border-lighter rounded-small tracking-wide focus:ring-2 focus:ring-blue/20 focus:outline-none transition-all",
}) {
  const { form_details, setform_details } = useJobForm();

  const formattedId = useMemo(
    () => id.replace(/[()]/g, "").trim().split(/\s+/).join("_").toLowerCase(),
    [id]
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setform_details((prev) => ({
      ...prev,
      [formattedId]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full gap-1.5">
      {label && (
        <label
          htmlFor={formattedId}
          className="text-xs font-bold text-text_b ml-1 uppercase tracking-wider"
        >
          {label}
        </label>
      )}

      <input
        id={formattedId}
        name={formattedId}
        value={form_details[formattedId] || ""}
        onChange={handleChange}
        type={type}
        className={class_name}
        placeholder={`Eg. ${placeholder}`}
        autoComplete="on"
      />
    </div>
  );
}

export default TextInput;
