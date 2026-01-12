import React from "react";
import SettingsHeaders from "./SettingsHeaders";
import Location from "./Location";

function LocationInformation() {
  return (
    <section className="w-full flex flex-col border p-6 md:p-8 rounded-small border-lighter shadow-sm items-center justify-start gap-8 bg-white">
      <SettingsHeaders
        icon_bg="bg-nevy_blue"
        icon="ri-map-pin-line"
        heading="Branch Locations"
        label="Your offices across different cities"
      />

      <ul className="w-full flex flex-col gap-4 list-none p-0 m-0">
        <li className="w-full">
          <Location
            heading="Bangalore Office (HQ)"
            address="123 Business Park, Sector 6"
            link_label="Headquarters"
            link="https://maps.google.com/?q=123+Business+Park+Sector+6+Bangalore"
          />
        </li>
        <li className="w-full">
          <Location
            heading="Mumbai Office"
            address="435 Corporate Tower, Andheri East"
            link_label="Regional Office"
            link="https://maps.google.com/?q=435+Corporate+Tower+Andheri+East+Mumbai"
          />
        </li>
      </ul>
    </section>
  );
}

export default LocationInformation;
