import Image from "next/image";

const BlockGuide = () => {
  const blockContent = [
    {
      id: 3,
      icon: "/assets/img/custom/icon-reward.png",
      text: `رحلات بأفضل الاسعار والخدمات`,
      delayAnim: "300",
    },
    {
      id: 2,
      icon: "/assets/img/custom/icon-easy.png",
      text: `تخطيط سهل وسريع للرحلات`,
      delayAnim: "200",
    },
    {
      id: 1,
      icon: "/assets/img/custom/icon-support.png",
      text: `خدمة عملاء على مدار الساعة`,
      delayAnim: "100",
    },
  ];
  return (
    <div className="grid grid-cols-1 justify-items-center items-center justify-center  md:grid-cols-3 gap-3 gap-y-6">
      {blockContent.map((item) => (
        <div
          className="pr-4 pl-4"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="flex justify-center">
              <Image
                src={item.icon}
                alt="image"
                className="js-lazy"
                width={65}
                height={65}
                quality={100}
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-base md:text-lg mt-2">{item.text}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockGuide;
