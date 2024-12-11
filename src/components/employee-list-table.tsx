"use client";
import React, { useState } from "react";
import DashboardModal from "./dashboard-modal";

const EmployeeListTable = () => {
  const data = [
    {
      type: "SMS",
      email: "sarahjohnson@gmail.com",
      phone: "+11234567890",
      mailingAddress: "123 Main St, Anytown, CA 123",

      action: "View Details",
    },
    {
      type: "SMS",
      email: "sarahjohnson@gmail.com",
      phone: "+11234567890",
      mailingAddress: "123 Main St, Anytown, CA 123",

      action: "View Details",
    },
    {
      type: "Email",
      email: "emmawillson@yahoo.com",
      phone: "+11234567890",
      mailingAddress: "123 Main St, Anytown, CA 123",

      action: "View Details",
    },
    {
      type: "Call",
      email: "sarahjohnson@gmail.com",
      phone: "+11234567890",
      mailingAddress: "123 Main St, Anytown, CA 123",

      action: "View Details",
    },
    {
      type: "Call",
      email: "jamesbrown@gmail.com",
      phone: "+11234567890",
      mailingAddress: "123 Main St, Anytown, CA 123",

      action: "View Details",
    },
    {
      type: "Email",
      email: "emmawillson@yahoo.com",
      phone: "+11234567890",
      mailingAddress: "123 Main St, Anytown, CA 123",

      action: "View Details",
    },
    {
      type: "Call",
      email: "emmawillson@yahoo.com",
      phone: "+11234567890",
      mailingAddress: "123 Main St, Anytown, CA 123",

      action: "View Details",
    },
    {
      type: "Call",
      email: "jamesbrown@gmail.com",
      phone: "+11234567890",
      mailingAddress: "123 Main St, Anytown, CA 123",

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
      <div className="overflow-x-auto h-[60vh]">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
                Type
              </th>
              <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
                Phone
              </th>
              <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
                Mailing Address
              </th>
              <th className="py-4 px-4 bg-gray-100 text-left text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-4 px-4 text-sm text-gray-700  text-left">
                  {item.email}
                </td>
                <td className="py-4 px-4 text-sm  text-gray-700  text-left">
                  {item.type}
                </td>
                <td className="py-4 px-4 text-sm text-gray-700  text-left">
                  {item.phone}
                </td>
                <td className="py-4 px-4 text-sm">{item.mailingAddress}</td>
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
      </div>

      {modalData && (
        <DashboardModal modalData={modalData} closeModal={closeModal} />
      )}
    </div>
  );
};

export default EmployeeListTable;
