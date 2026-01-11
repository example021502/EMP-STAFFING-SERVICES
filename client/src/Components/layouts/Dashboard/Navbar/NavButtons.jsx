import React, { useState, useContext } from "react";
import ButtonIcon from "../../../common/ButtonIcon";
import { useNavigate } from "react-router-dom";

function NavButtons() {
  const navigate = useNavigate();
  const [buttonName, setButtonName] = useState("Jobs");

  const onSelect = (name) => {
    setButtonName(name);
    name === "Jobs"
      ? navigate("")
      : name === "Interview pipeline"
      ? navigate("JobApplienceOverview")
      : name === "Settings"
      ? navigate("Settings")
      : "";
  };

  const buttons = [
    {
      id: "nav",
      name: "Jobs",
      icon: "ri-suitcase-line",
    },
    {
      id: "nav",
      name: "Offer released",
      icon: "ri-file-check-line",
    },
    {
      id: "nav",
      name: "Interview pipeline",
      icon: "ri-group-line",
    },
    {
      id: "nav",
      name: "Settings",
      icon: "ri-settings-5-line",
    },
  ];
  return (
    <div className="w-full transition-all ease-in-out duration-120 h-full gap-5 flex text-primary flex-col items-center justify-start">
      {buttons.map((button, index) => (
        <ButtonIcon
          key={index}
          icon={button.icon}
          id={button.id}
          text={button.name}
          onSelect={onSelect}
          clicked={button.name === buttonName}
        />
      ))}
    </div>
  );
}

export default NavButtons;
