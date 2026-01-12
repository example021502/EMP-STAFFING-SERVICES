import React, { useMemo } from "react";
import Label from "../../common/Label";
import ListFirstPart from "./ListFirstPart";
import SecondPart from "./SecondPart";
import ButtonsPart from "./ButtonsPart";

function ListView({ company }) {
  const name_prefix = useMemo(() => {
    const splitted_name = company.name.trim().split(/\s+/);
    const letter1 = splitted_name[0] ? splitted_name[0].charAt(0) : "";
    const letter2 = splitted_name[1] ? splitted_name[1].charAt(0) : "";
    return (letter1 + letter2).toUpperCase();
  }, [company.name]);

  return (
    <li className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full hover:bg-hover-light/40 p-3 rounded-small border border-transparent hover:border-lighter transition-all duration-200 group">
      <div className="flex flex-row items-center justify-start gap-4 flex-1 min-w-0 w-full lg:w-auto">
        <ListFirstPart
          field={company.field}
          name={company.name}
          name_prefix={name_prefix}
          status={company.status}
        />
      </div>

      <div className="flex flex-row items-center justify-between lg:justify-end gap-8 w-full lg:w-fit">
        <SecondPart
          active_jobs={company.active_jobs}
          pending_jobs={company.pending_jobs}
        />

        <div className="flex flex-col items-center justify-center shrink-0 min-w-[70px]">
          <Label
            as="span"
            text={company.positions}
            class_name="font-bold text-base text-text_b"
          />
          <Label
            as="span"
            text="Openings"
            class_name="text-[10px] font-bold text-text_b_l opacity-60 uppercase tracking-tighter"
          />
        </div>

        <div
          className="hidden sm:flex border-l border-lighter h-8 mx-2"
          aria-hidden="true"
        />

        <ButtonsPart email={company.email} joined_date={company.joined_date} />
      </div>
    </li>
  );
}

export default ListView;
