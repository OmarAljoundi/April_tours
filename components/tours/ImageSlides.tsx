import { useEffect, useRef, FC } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { BlurImage } from "../common/BlurImage";

const ImageSlides: FC<{ tourImages: string[]; mainImage?: string }> = ({
  tourImages,
  mainImage,
}) => {
  const mainSliderRef = useRef<Splide>(null);
  const thumbnailSliderRef = useRef<Splide>(null);

  useEffect(() => {
    if (mainSliderRef.current && thumbnailSliderRef.current) {
      const mainSlider = mainSliderRef.current.splide;
      const thumbnailSlider = thumbnailSliderRef.current.splide;

      try {
        mainSlider.sync(thumbnailSlider).mount();
        thumbnailSlider.mount();
      } catch (x) {}
    }
  }, []);

  const sliderOptions: Options = {
    perPage: 2,
    autoHeight: true,
    gap: 10,
    rewind: true,
    pagination: false,
    arrows: true,
    isNavigation: true,
    perMove: 2,
    breakpoints: {
      800: {
        perPage: 1,
        autoHeight: false,
        gap: 50,
        perMove: 1,
      },
    },
  };

  const thumbnailOptions: Options = {
    fixedWidth: 120,
    fixedHeight: 63,
    perPage: 6,
    perMove: 1,
    gap: 10,
    rewind: true,
    pagination: false,
    arrows: false,
    isNavigation: true,
  };
  return (
    <div style={{ width: "100%" }}>
      {tourImages?.length == 1 ? (
        <BlurImage image={mainImage} height={400} q={100} loading="eager" />
      ) : (
        <>
          <Splide
            dir="ltr"
            options={sliderOptions}
            ref={mainSliderRef}
            className="main-slider"
          >
            {tourImages?.map((o, i) => (
              <SplideSlide key={i}>
                <BlurImage image={o} height={300} q={100} />
              </SplideSlide>
            ))}
          </Splide>

          <div className="mt-4">
            <Splide
              options={thumbnailOptions}
              className="thumbnail-slider"
              ref={thumbnailSliderRef}
            >
              {tourImages?.map((o, i) => (
                <SplideSlide key={i}>
                  <BlurImage image={o} width={120} height={63} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlides;
