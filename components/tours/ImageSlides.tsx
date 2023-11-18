import { useEffect, useRef, FC } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { BlurImage } from "../common/BlurImage";
import { ImageDescription } from "@/types/custom";

const ImageSlides: FC<{
  tourImages: string[];
  mainImage?: string;
  image_desc: ImageDescription[];
}> = ({ tourImages, mainImage, image_desc }) => {
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

  const getImageDescription = (imageUrl: string) => {
    return image_desc.find((x) => x.image_url == imageUrl)?.text ?? false;
  };

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
        <>
          <BlurImage image={mainImage} height={400} q={100} loading="eager" />
          {getImageDescription(mainImage) && (
            <div
              className="text-center absolute z-40 bottom-5 right-0 left-0 max-w-[75%] w-fit mx-auto bg-white/90 rounded-xl shadow-lg p-2
         shadow-black/5 saturate-200 backdrop-blur-sm"
            >
              <h1 className="text-sm md:text-xl text-black font-bold  px-2">
                {getImageDescription(mainImage)}
              </h1>
            </div>
          )}
        </>
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
                {getImageDescription(o) && (
                  <div
                    className="text-center absolute z-40 bottom-5 right-0 left-0 max-w-[75%] mx-auto bg-white/75 rounded-xl shadow-lg p-2
                 shadow-black/5 saturate-200 backdrop-blur-sm"
                  >
                    <h1 className="text-sm md:text-xl text-black font-bold ">
                      {getImageDescription(o)}
                    </h1>
                  </div>
                )}
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
