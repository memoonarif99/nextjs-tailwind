"use client";
import React from "react";
import { Close } from "../../public/images";

const DashboardModal = ({ modalData, closeModal }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 ">
        <div className="bg-white p-7 rounded-lg shadow-lg text-[#3F4E41] w-3/4 lg:w-1/4">
          <div className="flex justify-between">
            <h2 className="text-[14px] md:text-[18px] lg:text-[26px] font-[600]  ">
              Detail <span className="text-primary-100">Information</span>{" "}
            </h2>
            <button onClick={closeModal}>
              <Close className="lg:h-full lg:w-full w-3 h-3" />
            </button>
          </div>

          <div className=" py-4 text-sm lg:text-[16px] text-[#898989] ">
            <p className="flex justify-between py-6 border-b border-gray-300 ">
              <p>Type</p> <p className="capitalize"> {modalData.type} </p>
            </p>
            <p className="flex justify-between py-6 border-b border-gray-300 ">
              <p>Employee</p> <p> {modalData.employee} </p>
            </p>
            <p className="flex justify-between py-6 border-b border-gray-300 ">
              <p>Time</p> <p> {modalData.time} </p>
            </p>

            <p className="flex justify-between py-6 border-b border-gray-300 ">
              <p>Status</p> <span>{modalData.status}</span>
            </p>
          </div>
          <div className="flex justify-end pt-4 gap-2">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Resend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;
