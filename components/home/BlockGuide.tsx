const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "assets/img/icons/1.png",
      title: "أسعار تنافسية",
      text: `أحجز ب أرخص الأسعار وأجود الخدمات`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "assets/img/icons/2.png",
      title: "احجز بسرعة وبسهولة",
      text: `<a class="btn -md -blue-1 bg-dark-1 text-white"><i class="bi bi-phone mr-15"></i>أحجز الآن</a>`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "assets/img/icons/3.png",
      title: "خدمة عملاء على مدار الساعة",
      text: `تواصل معنا.. تجدنا`,
      delayAnim: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" width={65} />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p
                className="text-15 mt-10"
                dangerouslySetInnerHTML={{
                  __html: item.text,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
