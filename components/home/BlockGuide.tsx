import Image from "next/image";

const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/assets/img/icons/1.png",
      title: "أسعار تنافسية",
      text: `أحجز ب أرخص الأسعار وأجود الخدمات`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/assets/img/icons/2.png",
      title: "احجز بسرعة وبسهولة",
      text: `<a class="d-flex justify-center  w-50 m-auto btn -md -blue-1 bg-dark-1 text-white" style="align-items:center;"><i class="bx bxs-phone mr-10 text-18" ></i>
      <span>أحجز الآن</span>
      </a>`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/assets/img/icons/3.png",
      title: "خدمة عملاء على مدار الساعة",
      text: `تواصل معنا.. تجدنا`,
      delayAnim: "300",
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
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p
                className="text-15 mt-2"
                dangerouslySetInnerHTML={{
                  __html: item.text,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockGuide;
