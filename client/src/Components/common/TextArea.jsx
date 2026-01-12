import React from "react";
import { useJobForm } from "../../context/Job_Form_data_authContext";

function TextArea({ id, label, placeholder = "Enter your message here..." }) {
  const { form_details, setform_details } = useJobForm();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setform_details((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-bold text-text_b ml-1">
          {label}
        </label>
      )}

      <textarea
        id={id}
        name={id}
        placeholder={`Eg. ${placeholder}`}
        value={form_details[id] || ""}
        onChange={handleChange}
        rows="6"
        className="flex-1 p-3 w-full border border-lighter rounded-small text-sm tracking-wide bg-white focus:ring-2 focus:ring-blue/20 focus:outline-none transition-all resize-y min-h-[120px]"
      />
    </div>
  );
}

export default TextArea;
