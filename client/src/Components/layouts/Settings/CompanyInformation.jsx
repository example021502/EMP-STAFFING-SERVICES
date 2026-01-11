import React, { useState } from "react";
import LabelInput2 from "../../common/LabelInput2";
import SettingsHeaders from "./SettingsHeaders";
function CompanyInformation({ company_information }) {
  const handleInputChange = (value) => {
    console.log("Hello");
  };

  return (
    <main className="w-full flex flex-col border p-8 rounded-small border-lighter shadow-sm items-center justify-start gap-6 text-text_b_l">
      <SettingsHeaders
        icon="ri-building-line"
        icon_bg="bg-nevy_blue"
        heading="Company Information"
        label="Basic details about your organization"
      />
      <main className="w-full flex flex-col items-start justify-start gap-2">
        <section className="w-full flex flex-row gap-4 items-center justify-center">
          <LabelInput2
            text="Company Name"
            placeholder="Company name"
            type="Text"
            onChange={handleInputChange}
            input_value={company_information.company_name}
          />
          <LabelInput2
            text="Registration Number"
            placeholder="Registration number"
            type="Text"
            onChange={handleInputChange}
            input_value={company_information.registration_number}
          />
        </section>
        <LabelInput2
          text="Address"
          placeholder="Address"
          type="Text"
          input_style="w-full pb-10 text-left py-1 border border-lighter px-2 rounded-extra_small focus:outline-none focus:ring-2 ring-[#d6d6d6]"
          onChange={handleInputChange}
          input_value={company_information.address}
        />
        <section className="w-full flex flex-row gap-4 items-center justify-center">
          <LabelInput2
            text="City"
            placeholder="City"
            type="Text"
            onChange={handleInputChange}
            input_value={company_information.city}
          />
          <LabelInput2
            text="State"
            placeholder="State"
            type="Text"
            onChange={handleInputChange}
            input_value={company_information.state}
          />
        </section>
      </main>
    </main>
  );
}

export default CompanyInformation;
