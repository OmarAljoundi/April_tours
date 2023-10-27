import React from "react";
const Counter = () => {
  const blockContent = [
    {
      id: 1,
      number: "+100",
      meta: "برامج سياحية",
      hasUnit: "",
      delayAnim: "100",
    },
    {
      id: 2,
      number: "+50",
      meta: "دولة حول العالم",
      hasUnit: "",
      delayAnim: "200",
    },
    {
      id: 3,
      number: "+2000",
      meta: "عملاء راضيين",
      hasUnit: "",
      delayAnim: "300",
    },
    {
      id: 4,
      number: "+5",
      meta: "في مجال السياحة",
      hasUnit: "",
      delayAnim: "400",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {blockContent.map((item) => (
        <div
          className="w-full pr-4 pl-4 shadow-card"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <div className="py-14 sm:py-7 text-center">
            <div className="text-xl lg:text-lg text-black">
              {item.number}
              {item.hasUnit}
            </div>
            <div className="text-14 lh-14 text-light-1 mt-2">{item.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
