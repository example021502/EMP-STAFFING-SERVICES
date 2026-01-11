import React from "react";
import Label from "../Components/common/Label";
import CompanyInformation from "../Components/layouts/Settings/CompanyInformation";
import ContactInformation from "../Components/layouts/Settings/ContactInformation";
import LocationInformation from "../Components/layouts/Settings/LocationInformation";

import Settings_data from "../Components/layouts/Settings/Settings_data.json";
function Settings() {
  return (
    <section className="w-full p-4 overflow-y-auto h-full flex flex-col items-start justify-start gap-4 text-text_b_l">
      <main className="w-full flex flex-col items-start justify-center">
        <Label text="Company Settings" class_name="font-semibold text-xl" />
        <Label
          text="Manage your company information and preferences"
          class_name="font-lighter text-sm"
        />
      </main>
      <section className="flex w-full flex-col items-center justify-start gap-8">
        <CompanyInformation
          company_information={Settings_data.company_information}
        />
        <ContactInformation
          contact_information={Settings_data.contact_information}
        />
        <LocationInformation
          location_information={Settings_data.branch_locations}
        />
      </section>
    </section>
  );
}

export default Settings;
