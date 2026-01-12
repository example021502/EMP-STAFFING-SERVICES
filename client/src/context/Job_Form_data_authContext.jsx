import React, { useState, useContext, useMemo } from "react";

export const Job_Form_Data_Context = React.createContext(null);

function Job_Form_data_authContext({ children }) {
  const [form_details, setform_details] = useState({
    position: "",
    Location: "",
    number_of_Position: "",
    years_of_Experience: "",
    salary_min: "",
    salary_max: "",
    salary_period: "",
    job_description: "",
  });

  const value = useMemo(
    () => ({
      form_details,
      setform_details,
    }),
    [form_details]
  );

  return (
    <Job_Form_Data_Context.Provider value={value}>
      {children}
    </Job_Form_Data_Context.Provider>
  );
}

export default Job_Form_data_authContext;

export const useJobForm = () => {
  const context = useContext(Job_Form_Data_Context);
  if (!context) {
    throw new Error(
      "useJobForm must be used within a Job_Form_data_authContext Provider"
    );
  }
  return context;
};
