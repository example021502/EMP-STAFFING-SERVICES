import React from "react";
import AdminNavBar from "../Components/layouts/AdminClientManagement/AdminNavBar";
import Label from "../Components/common/Label";
import { Outlet } from "react-router-dom";

function Admin_Client_Management() {
  return (
    <div className="w-full h-dvh flex flex-row overflow-hidden items-start justify-start bg-lighter">
      <AdminNavBar />

      <div className="flex-1 h-full flex flex-col bg-b tracking-wide overflow-hidden">
        <header className="flex flex-col items-start justify-center py-4 pl-6 border-b border-light w-full shrink-0">
          <Label
            as="h1"
            text="Client Management"
            class_name="text-lg font-slighter text-text_b"
          />
          <Label
            as="p"
            text="Track your partnerships"
            class_name="text-sm text-text_b_l opacity-80"
          />
        </header>

        <section className="flex-1 overflow-y-auto">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Admin_Client_Management;
