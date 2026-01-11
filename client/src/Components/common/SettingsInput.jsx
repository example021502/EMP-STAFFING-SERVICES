import React from "react";

function SettingsInput({ onChange, type, placeholder, class_name, value }) {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={class_name}
    />
  );
}

export default SettingsInput;
