import React, { useContext } from "react";
import ButtonIcon from "../../../common/ButtonIcon";
import { useNavigate } from "react-router-dom";
import { DashboardSection } from "../../../../context/DashboardSectionContext";

function NavButtons() {
  const navigate = useNavigate();
  const { section, changeSection } = useContext(DashboardSection);

  const navigationMap = {
    Jobs: "",
    "Interview pipeline": "JobApplienceOverview",
    Settings: "Settings",
    "Offer released": "Offers",
  };

  const onSelect = (name) => {
    const path = navigationMap[name];
    if (path !== undefined) {
      navigate(path);
      changeSection(name);
    }
  };

  const buttons = [
    { name: "Jobs", icon: "ri-suitcase-line" },
    { name: "Offer released", icon: "ri-file-check-line" },
    { name: "Interview pipeline", icon: "ri-group-line" },
    { name: "Settings", icon: "ri-settings-5-line" },
  ];

  return (
    <ul className="w-full h-full flex flex-col items-center justify-start gap-2 list-none p-1 m-0">
      {buttons.map((button) => {
        const isActive = button.name === section;

        return (
          <li
            key={button.name}
            className={`w-full ${button.name === "Settings" ? "mt-auto" : ""}`}
          >
            <ButtonIcon
              icon={button.icon}
              id={`nav-${button.name.replace(/\s+/g, "-").toLowerCase()}`}
              text={button.name}
              onSelect={onSelect}
              clicked={isActive}
              aria-current={isActive ? "page" : undefined}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default NavButtons;
