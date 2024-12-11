import React from "react";

const EmployeeListHead = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <p className="text-xl font-semibold border-[#325576] ">Contact List</p>
      {/* input search */}
      <div className="bg-gray-100 border flex gap-2 items-center p-3 rounded-lg w-2/4">
        <svg
          width="14"
          height="17"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.65682 4.09091C7.65682 6.0603 6.06031 7.65681 4.09091 7.65681C2.12151 7.65681 0.525 6.0603 0.525 4.09091C0.525 2.12151 2.12151 0.525 4.09091 0.525C6.06031 0.525 7.65682 2.12151 7.65682 4.09091Z"
            stroke="#F97B23"
            stroke-width="1.05"
          />
          <line
            x1="8.25754"
            y1="9"
            x2="6.54545"
            y2="7.28792"
            stroke="#F97B23"
            stroke-width="1.05"
            stroke-linecap="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="border-none focus:outline-none bg-inherit w-full"
        />
      </div>
      <button className="border border-[#325576] w-1/5 p-2 rounded-lg text-[#325576] ">
        Import Contact
      </button>
    </div>
  );
};

export default EmployeeListHead;
