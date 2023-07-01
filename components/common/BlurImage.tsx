"use client";
import Image from "next/legacy/image";
import { FC, useState } from "react";
export const BlurImage: FC<{
  image: string;
  width?: number;
  height?: number;
  customClass?: string;
  loading?: "lazy" | "eager";
  priority?: "high" | "low";
  q?: number;
}> = ({
  image,
  height,
  width,
  customClass,
  priority = "low",
  loading = "lazy",
  q = 50,
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div
      className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
      style={{ width: width ?? "100%", height: height ?? "100%" }}
    >
      {width && height ? (
        <Image
          alt=""
          src={image}
          width={width}
          height={height}
          objectFit="cover"
          fetchPriority={priority}
          loading={loading}
          quality={q}
          className={`
              ${
                customClass ?? ""
              } duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              }) `}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          alt=""
          src={image}
          layout="fill"
          fetchPriority={priority}
          loading={loading}
          objectFit="cover"
          quality={q}
          className={`
             ${
               customClass ?? ""
             } duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </div>
  );
};
