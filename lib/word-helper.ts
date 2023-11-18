"use client";
import { Tour } from "@/types/custom";
import {
  Paragraph,
  Document,
  Packer,
  TextRun,
  AlignmentType,
  HeadingLevel,
  ImageRun,
  PageBorderDisplay,
  PageBorderOffsetFrom,
  PageBorderZOrder,
  NumberFormat,
  PageNumberSeparator,
  PageTextDirectionType,
} from "docx";
import { saveAs } from "file-saver";
export const generate = async (tour: Tour) => {
  const createStories = (): Paragraph[] => {
    var p: Paragraph[] = [];
    p.push(createSubHeading("يوميات البرنامج"));
    tour.tour_sections?.map((i) => {
      p.push(
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [
            new TextRun({
              text: i.title,
              bold: true,
              size: 32,
              rightToLeft: true,
              break: 1,
              font: {
                name: "Segoe UI Semilight",
              },
            }),
            new TextRun({
              text: i.description,
              bold: false,
              size: 28,
              rightToLeft: true,
              break: 2,
              font: {
                name: "Calibri",
              },
            }),
          ],
        })
      );
    });

    return p;
  };
  const createSubHeading = (text: string): Paragraph => {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      alignment: AlignmentType.RIGHT,
      thematicBreak: true,
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 42,
          color: "#3795cf",
          font: {
            name: "Segoe UI Semilight",
          },
          rightToLeft: true,
          break: 2,
        }),
      ],
    });
  };
  const createHeading = (text: string): Paragraph => {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: {
        beforeAutoSpacing: false,
        before: 0,
      },
      children: [
        new TextRun({
          text,
          bold: true,
          color: "#3795cf",
          size: 48,
          font: {
            name: "Segoe UI Semilight",
          },
          language: {
            value: "Arabic",
          },
        }),
      ],
    });
  };
  const createBullet = (text: string, text2?: string): Paragraph => {
    var x = new Paragraph({
      alignment: AlignmentType.RIGHT,

      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 32,
          rightToLeft: true,
          break: 1,
          font: {
            name: "Segoe UI Semilight",
          },
        }),
      ],
    });
    if (text2) {
      x.addChildElement(
        new TextRun({
          text: text2,
          bold: false,
          size: 28,
          rightToLeft: true,
          break: 2,
          font: {
            name: "Calibri",
          },
        })
      );
    }
    return x;
  };

  const createTourIncludes = (): Paragraph[] => {
    var p: Paragraph[] = [];
    p.push(createSubHeading("ما يشمله البرنامج"));
    tour.tour_includes?.map((i) => {
      p.push(createBullet(i.title, i.description.replaceAll(",", " ، ")));
    });
    return p;
  };
  const createTourExcludes = (): Paragraph[] => {
    var p: Paragraph[] = [];
    p.push(createSubHeading("ما لا يشمله البرنامج"));
    tour.tour_excludes?.map((i) => {
      p.push(createBullet(i.title, i.description.replaceAll(",", " ، ")));
    });
    return p;
  };

  const createTourInfo = (): Paragraph => {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: {
        after: 100,
        afterAutoSpacing: false,
        before: 500,
        beforeAutoSpacing: false,
      },
      style: "Intense Quote",
      shading: {
        fill: "#3795cf",
      },
      children: [
        new TextRun({
          text: `مدة الرحلة: ${tour.number_of_days}`,
          font: {
            name: "Segoe UI Semilight",
          },
          break: 0,
          color: "#ffffff",
          size: 24,
          bold: true,
          language: {
            value: "Arabic",
          },
        }),
        new TextRun({
          text: ` - الدول: ${tour.tour_countries?.map((x) => x).join(" ، ")}`,
          font: {
            name: "Segoe UI Semilight",
          },

          break: 0,
          size: 24,
          bold: true,
          language: {
            value: "Arabic",
          },
          color: "#ffffff",
        }),
        new TextRun({
          text: ` - نوع الرحلة: ${tour?.tour_type?.name}`,
          font: {
            name: "Segoe UI Semilight",
          },
          color: "#ffffff",
          break: 0,

          size: 24,
          bold: true,
          language: {
            value: "Arabic",
          },
        }),
        new TextRun({
          text: ` - أيام الرحلة: ${tour.start_day?.join(" ، ")}`,
          font: {
            name: "Segoe UI Semilight",
          },

          color: "#ffffff",
          break: 0,
          size: 24,
          bold: true,
          language: {
            value: "Arabic",
          },
        }),
      ],
    });
  };

  const convertToBase64 = async () => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (result) {
          resolve(result);
        } else {
          reject(new Error("Failed to read the image as Base64."));
        }
      };

      fetch(
        "https://kxoneskwkgrjredodsfx.supabase.co/storage/v1/object/public/admin-only/main-logo.png",
        {
          headers: { "Cache-Control": "no-cache" },
          next: {
            revalidate: 0,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to fetch the image. Status: ${response.status}`
            );
          }
          return response.blob();
        })
        .then((blob) => {
          reader.readAsDataURL(blob);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const createLogo = async (): Promise<Paragraph> => {
    try {
      const result = (await convertToBase64()) as string;

      return new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new ImageRun({
            data: Uint8Array.from(
              atob(result.replace("data:image/png;base64,", "")),
              (c) => c.charCodeAt(0)
            ),
            transformation: {
              width: 200,
              height: 100,
            },
          }),
        ],
      });
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const createHotelInfo = (): Paragraph[] => {
    var p: Paragraph[] = [];
    p.push(createSubHeading("الفنادق"));
    tour.tour_hotels?.map((i) => {
      p.push(
        new Paragraph({
          alignment: AlignmentType.LEFT,
          bullet: {
            level: 0,
          },
          children: [
            new TextRun({
              text: i,
              bold: true,
              size: 24,
              rightToLeft: true,
              break: 0,
            }),
          ],
        })
      );
    });
    return p;
  };

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            borders: {
              pageBorders: {
                display: PageBorderDisplay.ALL_PAGES,
                offsetFrom: PageBorderOffsetFrom.PAGE,
                zOrder: PageBorderZOrder.BACK,
              },
            },
            pageNumbers: {
              formatType: NumberFormat.BULLET,
              separator: PageNumberSeparator.EN_DASH,
              start: 1,
            },
          },
        },

        children: [
          await createLogo(),
          createHeading(tour.name!),
          createTourInfo(),
          ...createStories(),
          ...createTourIncludes(),
          ...createTourExcludes(),
          ...createHotelInfo(),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${tour.name}.docx`);
    console.log("Document created successfully");
  });
};
