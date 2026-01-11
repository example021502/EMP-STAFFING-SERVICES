import React from "react";
import LabelInput2 from "../../common/LabelInput2";
import SettingsHeaders from "./SettingsHeaders";

function ContactInformation({ contact_information }) {
  const handleInputChange = () => {
    console.log("Hi");
  };
  return (
    <main className="w-full flex flex-col border p-8 rounded-small border-lighter shadow-sm items-center justify-start gap-6 text-text_b_l">
      <SettingsHeaders
        icon="ri-mail-line"
        icon_bg="bg-red-dark"
        heading="Contact Information"
        label="How clients and candidates can reach you"
      />
      <main className="w-full flex flex-col items-start justify-start gap-2">
        <section className="w-full flex flex-row gap-4 items-center justify-center">
          <LabelInput2
            text="Email"
            placeholder="Email"
            type="Text"
            onChange={handleInputChange}
            input_value={contact_information.email}
          />
          <LabelInput2
            text="Phone"
            placeholder="Phone number"
            type="Text"
            onChange={handleInputChange}
            input_value={contact_information.phone}
          />
        </section>

        <section className="w-full flex flex-row gap-4 items-center justify-center">
          <LabelInput2
            text="Website"
            placeholder="Website"
            type="Text"
            onChange={handleInputChange}
            input_value={contact_information.website}
          />
          <LabelInput2
            text="LinkedIn"
            placeholder="Linkedin"
            type="Text"
            onChange={handleInputChange}
            input_value={contact_information.linked_in}
          />
        </section>
      </main>
    </main>
  );
}

export default ContactInformation;
