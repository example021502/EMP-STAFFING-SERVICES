import React, { useContext } from "react";
import ButtonColor from "../../common/ButtonColor";
import ButtonPlain from "../../common/ButtonPlain";
import Label from "../../common/Label";
import SpanLabel from "../../common/SpanLabel";
import CardIcons from "../../common/CardIcons";
import { Link } from "react-router-dom";
import { DashboardSection } from "../../../context/DashboardSectionContext";

function Job_Card({ job_name, status, slots_available, date_posted, ...rest }) {
  const handleEdit = () => {
    alert(`Editing job: ${job_name}`);
  };
  const { setSection } = useContext(DashboardSection);
  return (
    <section className="w-full p-5 rounded-lg shadow-md border border-lighter hover:shadow-lg transition-shadow duration-300 gap-4 flex flex-col items-start justify-center bg-white">
      <div className="w-full flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Label
            as="h3"
            text={job_name}
            class_name="text-base font-bold text-text_b"
          />
          <SpanLabel
            text={status}
            class_name="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
          />
        </div>

        <nav
          className="flex items-center gap-3 ml-auto"
          aria-label="Job actions"
        >
          <Link
            to="JobApplienceOverview"
            className="focus:outline-none focus:ring-2 focus:ring-nevy_blue rounded-md"
            aria-label={`View details for ${job_name}`}
          >
            <ButtonPlain text="View Details" />
          </Link>
          <ButtonColor
            text="Edit"
            onSelect={handleEdit}
            aria-label={`Edit ${job_name}`}
          />
        </nav>
      </div>

      <div className="w-full py-2 border-y border-lighter/50">
        <CardIcons {...rest} />
      </div>

      <footer className="flex flex-row flex-wrap gap-6 items-center justify-start w-full opacity-70">
        <div className="flex items-center gap-1.5">
          <i className="ri-team-line text-xs" aria-hidden="true"></i>
          <Label
            as="span"
            text={`${slots_available} Slots`}
            class_name="text-xs font-medium"
          />
        </div>
        <div className="flex items-center gap-1.5">
          <i className="ri-calendar-line text-xs" aria-hidden="true"></i>
          <Label
            as="span"
            text={`Posted: ${date_posted}`}
            class_name="text-xs font-medium"
          />
        </div>
      </footer>
    </section>
  );
}

export default Job_Card;
