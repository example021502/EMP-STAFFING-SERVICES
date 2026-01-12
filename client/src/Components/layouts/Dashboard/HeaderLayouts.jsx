import React from "react";
import ButtonIcon from "../../common/ButtonIcon";
import Icon from "../../common/Icon";
import LogoHeadings from "./LogoHeadings";

function HeaderLayouts() {
  const handleAction = (name) => {
    console.log(`Action: ${name}`);
  };

  return (
    <header className="flex pr-9 pl-5 py-2 border-b border-lighter flex-row items-center justify-start sticky top-0 bg-white z-40">
      <nav
        className="w-full flex flex-row items-center justify-between"
        aria-label="Main Header"
      >
        <LogoHeadings />

        <div className="flex flex-row gap-5 items-center justify-end ml-auto">
          <div className="h-10 flex items-center">
            <ButtonIcon
              id="agreement-nav"
              text="Agreement"
              icon="ri-file-text-line"
              onSelect={() => handleAction("Agreement")}
            />
          </div>

          <button
            type="button"
            onClick={() => handleAction("Notifications")}
            className="relative flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors outline-none focus:ring-2 focus:ring-Darkgold"
            aria-label="View 1 new notification"
          >
            <Icon
              icon="ri-notification-4-line"
              class_name="text-xl text-text_b"
            />
            <span
              className="absolute top-2 right-2 w-2 h-2 rounded-full bg-Darkgold border-2 border-white"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={() => handleAction("Profile")}
            className="w-10 h-10 rounded-full p-0.5 bg-gradient-btn text-white hover:opacity-90 transition-opacity outline-none focus:ring-2 focus:ring-Darkgold"
            aria-label="User Profile"
          >
            <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
              <Icon icon="ri-user-line" class_name="text-2xl" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderLayouts;
