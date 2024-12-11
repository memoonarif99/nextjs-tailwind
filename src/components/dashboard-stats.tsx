"use client";
import React from "react";
import {
  CredentailsSent,
  FailedDeleveries,
  SuccessfulDeliveries,
  TotalEmployees,
} from "../../public/images";

const DashboardStats = () => {
  const cardsData = [
    {
      title: "Total Employees",
      value: "40,689",
      icon: <TotalEmployees />,
      change: 8.5,
      bgColor: "bg-[#8280ff40]",
      changeText: "Up from yesterday",
      changeColor: "text-green-500",
    },
    {
      title: "Credential Sent",
      value: "10293",
      icon: <CredentailsSent />,
      change: 1.3,
      bgColor: "bg-[#FEC53D40]",
      changeText: "Up from past week",
      changeColor: "text-green-500",
    },
    {
      title: "Successful Deliveries",
      value: "$89,000",
      icon: <SuccessfulDeliveries />,
      change: -4.3,
      bgColor: "bg-[#4AD99140]",
      changeText: "Down from yesterday",
      changeColor: "text-red-500",
    },
    {
      title: "Failed Deliveries",
      value: "2040",
      icon: <FailedDeleveries />,
      change: 1.8,
      bgColor: "bg-[#FF906640]",
      changeText: "Up from yesterday",
      changeColor: "text-green-500",
    },
  ];
  return (
    <div className="flex justify-between items-center mt-6 gap-4 ">
      {cardsData.map((card, index) => (
        <div
          className="bg-white flex-1 rounded-lg shadow-md p-6 flex flex-col items-start justify-between transform hover:scale-105 transition-transform duration-500"
          key={index}
        >
          <div className="flex items-center justify-between w-full gap-6">
            <div>
              <h2 className="text-gray-600 text-md font-medium whitespace-pre">
                {card.title}
              </h2>
              <p className="text-2xl font-bold text-gray-900 leading-loose">
                {card.value}
              </p>
            </div>
            <div
              className={`bg-gray-100 p-3 rounded-lg w-14 h-14 ${card.bgColor}`}
            >
              {card.icon}
            </div>
          </div>
          <div className={`flex items-center mt-4 text-sm ${card.changeColor}`}>
            <i
              className={`fas fa-arrow-${card.change > 0 ? "up" : "down"} mr-1`}
            ></i>
            <span>
              {Math.abs(card.change)}%{" "}
              <span className="text-black">{card.changeText}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
