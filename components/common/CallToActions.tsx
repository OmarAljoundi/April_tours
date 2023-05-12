const CallToActions = () => {
  return (
    <section className="layout-pt-md layout-pb-md bg-dark-2">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <input
                  className="bg-white h-60"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              {/* End email input */}

              <div>
                <button className="button -md h-60 bg-blue-1 text-white">
                  إشترك الآن
                </button>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto text-right">
                <h4 className="text-26 text-white fw-600" dir="rtl">
                  إبدأ رحلتك السفرية من هنا!
                </h4>
                <div className="text-white">إشترك لتصلك اخر عروض ادفايزر</div>
              </div>
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
