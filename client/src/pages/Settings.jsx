import React from "react";
import Label from "../Components/common/Label";
import CompanyInformation from "../Components/layouts/Settings/CompanyInformation";
import ContactInformation from "../Components/layouts/Settings/ContactInformation";
import LocationInformation from "../Components/layouts/Settings/LocationInformation";

import Settings_data from "../Components/layouts/Settings/Settings_data.json";

function Settings() {
  return (
    <div className="w-full p-6 overflow-y-auto h-full flex flex-col items-start justify-start gap-6 text-text_b_l">
      <header className="w-full flex flex-col items-start justify-center border-b border-lighter pb-4">
        <Label
          as="h1"
          text="Company Settings"
          class_name="font-semibold text-2xl text-text_b"
        />
        <Label
          as="p"
          text="Manage your company information and preferences"
          class_name="font-lighter text-sm opacity-80"
        />
      </header>

      <div className="flex w-full flex-col items-center justify-start gap-10 max-w-5xl mx-auto">
        <CompanyInformation
          company_information={Settings_data.company_information}
        />
        <ContactInformation
          contact_information={Settings_data.contact_information}
        />
        <LocationInformation
          location_information={Settings_data.branch_locations}
        />
      </div>
    </div>
  );
}

export default Settings;
