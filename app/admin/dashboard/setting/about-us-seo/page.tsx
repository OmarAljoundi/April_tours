"use client";
import { Separator } from "@/components/ui/separator";
import { FunctionComponent, useState } from "react";
import { useSetting } from "@/hooks/use-setting";
import { toast } from "sonner";
import { PushJsonFile } from "@/lib/storage-operations";
import { useFormik } from "formik";
import { Button } from "@nextui-org/react";
import { Save } from "lucide-react";
import { AboutUsSeo } from "@/types/custom";
import SeoForm from "@/shared/seo-form";

interface AboutUsSeoPageProps {}

const AboutUsSeoPage: FunctionComponent<AboutUsSeoPageProps> = () => {
  const [loading, setLoading] = useState(false);
  const config = useSetting();
  const SaveChanges = (formData: AboutUsSeo) => {
    setLoading(true);
    let newObject = { ...config.setting };
    newObject = {
      ...newObject,
      about: {
        seo: formData.seo,
      },
    };

    config.onCreate(newObject);
    const jsonData = JSON.stringify(newObject);
    const blob = new Blob([jsonData], { type: "application/json" });
    toast.promise(PushJsonFile(blob), {
      loading: "Saving your changes..",
      error(error) {
        return error;
      },
      success() {
        return "Saved successfully";
      },
      finally() {
        setLoading(false);
      },
    });
  };
  const formik = useFormik({
    initialValues: config?.setting?.about ?? {
      seo: { description: "", tags: "", title: "" },
    },
    onSubmit: SaveChanges,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
  });
  return (
    <div className=" lg:px-4 ">
      <div className=" h-full flex-1 flex-col space-y-8 p-8 flex">
        <div>
          <p className="text-xl">About Us Seo!</p>
          <p className="text-muted-foreground">
            Add Seo to your page to boots customers search!
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="p-4 shadow-medium rounded-medium"
        >
          <SeoForm formik={formik} />
          <Button
            color="primary"
            endContent={<Save />}
            type="submit"
            className="mt-8"
            isLoading={loading}
          >
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AboutUsSeoPage;
