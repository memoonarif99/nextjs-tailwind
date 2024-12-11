import React from "react";
import EmployeeListHead from "./employee-list-head";
import EmployeeListTable from "./employee-list-table";

const EmployeeList = () => {
  return (
    <div className="mt-6 w-full bg-white rounded-lg">
      <EmployeeListHead />
      <EmployeeListTable />
    </div>
  );
};

export default EmployeeList;
