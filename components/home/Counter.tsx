"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { cn } from "@/lib/utils";

const Counter = () => {
  const blockContent = [
    {
      id: 1,
      number: "+100",
      number_2: 100,
      meta: "برامج سياحية",
      delayAnim: "100",
      classItem: "col-span-6",
    },
    {
      id: 2,
      number: "+50",
      number_2: 50,
      meta: "دولة حول العالم",

      delayAnim: "200",
      classItem: "col-span-6",
    },
    {
      id: 3,
      number: "+2000",
      number_2: 2000,
      meta: "عملاء راضيين",
      delayAnim: "300",
      classItem: "col-span-12",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      {blockContent.map((item) => (
        <div
          className={cn("w-full pr-4 pl-4 shadow-card", item.classItem ?? "")}
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <div className="py-6  sm:py-7 text-center">
            +
            <CountUp
              start={0}
              end={item.number_2}
              duration={2.75}
              decimals={0}
              enableScrollSpy
            >
              {({ countUpRef, start }) => (
                <span
                  className="text-xl lg:text-lg text-black"
                  ref={countUpRef}
                >
                  {item.number}
                </span>
              )}
            </CountUp>
            <div className="text-14 lh-14 text-light-1 mt-2">{item.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
