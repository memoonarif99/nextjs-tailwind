"use client";
import React, { useState } from "react";
import DashboardModal from "./dashboard-modal";

const DashbaordRecentActivity = () => {
  const data = [
    {
      type: "SMS",
      employee: "sarahjohnson@gmail.com",
      time: "2 Minutes ago",
      status: "Success",
      statusColor: "text-green-500",
      action: "View Details",
    },
    {
      type: "SMS",
      employee: "sarahjohnson@gmail.com",
      time: "2 Minutes ago",
      status: "Pending",
      statusColor: "text-orange-400",
      action: "View Details",
    },
    {
      type: "Email",
      employee: "emmawillson@yahoo.com",
      time: "2 Minutes ago",
      status: "Failed",
      statusColor: "text-red-500",
      action: "View Details",
    },
    {
      type: "Call",
      employee: "sarahjohnson@gmail.com",
      time: "2 Minutes ago",
      status: "Pending",
      statusColor: "text-orange-400",
      action: "View Details",
    },
    {
      type: "Call",
      employee: "jamesbrown@gmail.com",
      time: "2 Minutes ago",
      status: "Success",
      statusColor: "text-green-500",
      action: "View Details",
    },
    {
      type: "Email",
      employee: "emmawillson@yahoo.com",
      time: "2 Minutes ago",
      status: "Failed",
      statusColor: "text-red-500",
      action: "View Details",
    },
    {
      type: "Call",
      employee: "emmawillson@yahoo.com",
      time: "2 Minutes ago",
      status: "Failed",
      statusColor: "text-red-500",
      action: "View Details",
    },
    {
      type: "Call",
      employee: "jamesbrown@gmail.com",
      time: "2 Minutes ago",
      status: "Success",
      statusColor: "text-green-500",
      action: "View Details",
    },
  ];

  const [modalData, setModalData] = useState(null);

  const openModal = (item: any) => {
    setModalData(item);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
              Channel
            </th>
            <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
              Employee
            </th>
            <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
              Time
            </th>
            <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
              Status
            </th>
            <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-4 px-4 text-sm  text-gray-700  text-left">
                {item.type}
              </td>
              <td className="py-4 px-4 text-sm text-gray-700  text-left">
                {item.employee}
              </td>
              <td className="py-4 px-4 text-sm text-gray-700  text-left">
                {item.time}
              </td>
              <td className="py-4 px-4 text-sm">
                <span className={item.statusColor}>{item.status}</span>
              </td>
              <td className="py-4 px-4 text-sm text-gray-700  text-left">
                <button
                  onClick={() => openModal(item)}
                  className="text-blue-500"
                >
                  {item.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-3">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">
          View More
        </button>
      </div>
      {modalData && (
        <DashboardModal modalData={modalData} closeModal={closeModal} />
      )}
    </div>
  );
};

export default DashbaordRecentActivity;
