import React from "react";
import Form from "./Form";
import Table from "../UI/Table";
import UsersTable from "./UsersTable";

export default function FormSection() {
  return (
    <div className="w-full flex flex-row justify-between flex-wrap md:flex-nowrap content-center gap-20">
      <div className="w-full md:w-2/5">
        <Form />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <span className="text-[16px] font-[700] text-digifly-purple mb-6">
          Results:
        </span>
        <UsersTable />
      </div>
    </div>
  );
}
