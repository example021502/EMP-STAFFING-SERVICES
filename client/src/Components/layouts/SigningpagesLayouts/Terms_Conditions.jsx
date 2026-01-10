import React, { useContext } from "react";
import { motion } from "framer-motion";
import Input from "../../common/Input";
import { signup_form_data_context } from "../../../context/SigningupContext";

function Terms_Conditions() {
  const { setForm } = useContext(signup_form_data_context);

  const handleTerms_Conditions = (value) => {
    setForm({
      ...prev,
      checkbox: value,
    });
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 75,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 1, delay: 0.1 },
      }}
      className="flex flex-row items-start text-xs gap-2 justify-start w-full"
    >
      <Input
        type="checkbox"
        class_name="bg-input_cream focus:bg-nevy_blue"
        onchange={handleTerms_Conditions}
      />
      <div>
        <p>
          I accept the{" "}
          <a
            className="text-nevy_blue font-semibold hover:underline transition-all ease-in-out"
            href="#"
          >
            terms and conditions
          </a>{" "}
          and agree to the terms of{" "}
          <a
            href="#"
            className="text-nevy_blue font-semibold hover:underline transition-all ease-in-out"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default Terms_Conditions;
