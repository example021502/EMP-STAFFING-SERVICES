import React from "react";
import Icon from "../../common/Icon";
import Label from "../../common/Label";

function SettingsHeaders({ icon_bg, icon, heading, label }) {
  return (
    <section className="w-full flex flex-row items-center justify-start gap-2">
      <Icon
        icon={icon}
        class_name={`w-10 h-10 text-2xl text-text_white rounded-small flex items-center justify-center ${icon_bg}`}
      />
      <div className="flex flex-col items-start justify-start">
        <Label text={heading} class_name="text-xl font-semibold" />
        <Label text={label} class_name="text-sm font-lighter" />
      </div>
    </section>
  );
}

export default SettingsHeaders;
