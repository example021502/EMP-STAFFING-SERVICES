import React, { useContext, useMemo } from "react";
import client_management_display_data from "../../dummy_data_structures/client_management_display_data.json";
import { listGridViewContext } from "../../../context/ListGridViewContext";
import ListView from "./ListView";
import CompanyCard from "./CompanyCard";

function ClientManagementCards() {
  const { view } = useContext(listGridViewContext);

  const clientEntries = useMemo(
    () => Object.entries(client_management_display_data),
    []
  );

  const gridStyles = {
    apps: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10",
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10",
    list: "flex flex-col gap-4 w-full",
  };

  return (
    <section className="w-full h-fit py-4">
      <ul
        className={`transition-all duration-300 ease-in-out ${
          gridStyles[view] || gridStyles.list
        }`}
      >
        {clientEntries.map(([id, company]) => (
          <li key={id} className="list-none outline-none">
            {view === "list" ? (
              <ListView company={company} />
            ) : (
              <CompanyCard company={company} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ClientManagementCards;
