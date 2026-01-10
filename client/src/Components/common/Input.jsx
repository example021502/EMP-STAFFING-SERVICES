import React, { useState } from "react";
import Icon from "./Icon";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../styles/index.css";
function Input({ autocomplete, id, placeholder, type, class_name, onchange }) {
  const isPassword =
    placeholder === "Password" || placeholder === "Confirm Password";
  const [clicked, setClicked] = useState(false);
  isPassword ? (clicked ? (type = "text") : (type = "password")) : "";

  const ischeckbox = type === "checkbox";

  const isfocus = id === "email" || id === "company_name";
  const isphone_number = type === "tel";
  const onChange = (e) => {
    ischeckbox
      ? onchange(e.target.checked)
      : isphone_number
      ? onchange(phone_number)
      : onchange(e.target.value, id);
  };

  const [phone_number, set_phone_number] = useState("");

  return type === "tel" ? (
    <PhoneInput
      country={"in"}
      value={phone_number}
      onChange={(phone) => set_phone_number(phone)}
    />
  ) : (
    <>
      <input
        autoComplete={autocomplete}
        autoFocus={isfocus}
        onChange={(e) => onChange(e)}
        type={type}
        placeholder={placeholder}
        className={`${class_name} ${isPassword ? "pr-8" : ""}`}
        required
      />
      {isPassword && (
        <span onClick={() => setClicked(!clicked)} className="absolute right-1">
          <Icon icon={clicked ? "ri-eye-off-line" : "ri-eye-line"} />
        </span>
      )}
    </>
  );
}

export default Input;
