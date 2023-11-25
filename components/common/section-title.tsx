import { FunctionComponent } from "react";

interface SectionTitleProps {
  title: string;
  sub_title?: string;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({
  title,
  sub_title,
}) => {
  return (
    <div className="grid justify-center justify-items-center pt-10 lg:pt-20 pb-5">
      <h2 className="text-right text-2xl sm:text-4xl font-bold">{title}</h2>
      {sub_title && <p className="text-2xl mt-0 sm:mt-5">{sub_title}</p>}
    </div>
  );
};

export default SectionTitle;
