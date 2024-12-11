"use client";
import React from "react";
import {
  AddEmployees,
  SendCredentail,
  UploadEmployees,
} from "../../public/images";

const DashboardButtons = () => {
  const buttons = [
    {
      icon: <SendCredentail />,
      title: "Send Credentials",
      subtitle: "New leads",
      bgColor: "bg-[#F3FEEC]",
      action: () => alert("Send Credentials clicked"),
    },
    {
      icon: <UploadEmployees />,
      title: "Upload Employees",
      subtitle: "New sales",
      bgColor: "bg-[#FEF6E7]",
      action: () => alert("Upload Employees clicked"),
    },
    {
      icon: <AddEmployees />,
      title: "Add Employee",
      subtitle: "Income per lead",
      bgColor: "bg-[#F5F5FB]",
      action: () => alert("Add Employee clicked"),
    },
  ];

  return (
    <div className="flex justify-between items-center mt-6 gap-6 w-full">
      {buttons.map((button, index) => (
        <button
          onClick={button.action}
          key={index}
          className="flex flex-1 gap-3 items-center p-6 bg-white rounded-lg shadow-md focus:outline-none transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          <div
            className={`flex items-center justify-center h-14 w-14  rounded-lg ${button.bgColor}`}
          >
            {button?.icon}
          </div>
          <div className="ml-4 text-left">
            <h2 className="text-lg font-semibold text-gray-900">
              {button.title}
            </h2>
            <p className="text-sm text-[#8A9185]">{button.subtitle}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default DashboardButtons;
