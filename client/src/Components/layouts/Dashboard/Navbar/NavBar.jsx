import React from "react";
import ButtonIcon from "../../../common/ButtonIcon";
import NavButtons from "./NavButtons";
import Icon from "../../../common/Icon";
import Label from "../../../common/Label";
import { useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <section className="w-84 px-4 py-2 pb-6 gap-4 h-full flex flex-col items-center justify-center border-r border-lighter">
      <div className="flex border-b pb-2 border-lighter w-full flex-row items-center justify-start gap-2 transition-all ease-in-out duration-100">
        <span className="bg-gradient-btn text-white rounded-small">
          <Icon icon="ri-building-line" class_name="text-2xl w-8 h-8" />
        </span>
        <div className="flex flex-col items-start justify-center">
          <Label text="Total consultancy" class_name="text-lg text-heavy" />
          <Label text="Service Platform" class_name="text-sm text-light" />
        </div>
      </div>
      <NavButtons />
    </section>
  );
}

export default Navbar;
