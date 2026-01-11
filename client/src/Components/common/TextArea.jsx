import React from "react";

function TextArea({ type, placeholder = "Enter your message here..." }) {
  const holder = `Eg. ${placeholder}`;
  return (
    <textarea
      type={type}
      placeholder={holder}
      value={value}
      rows="6"
      className="flex-1 flex p-2 w-full border border-gray-300 rounded-lg focus:ring-1 focus:ring-lighter focus:outline-none"
    />
  );
}

export default TextArea;
