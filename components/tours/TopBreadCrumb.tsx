import Link from "next/link";
import { FC } from "react";

interface TopBreadCrumbProps {
  breads: { title: string; href?: string; current?: boolean }[];
}
const TopBreadCrumb: FC<TopBreadCrumbProps> = ({ breads }) => {
  return (
    <nav className="text-black font-bold my-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex items-end">
        <li className="flex items-center">
          <Link href="/" className="text-[10px] sm:text-sm md:text-base">
            الرئيسية
          </Link>
          <svg
            className="fill-current w-3 h-3 mx-1 sm:mx-3 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>
        {breads
          .filter((x) => !x.current)
          .map((item) => (
            <li className="flex items-center" key={item.title}>
              <Link
                className="text-[10px] sm:text-sm md:text-base"
                href={item.href}
              >
                {item.title}
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-1 sm:mx-3 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
          ))}

        <li className="flex items-end">
          <Link
            href="#"
            className="text-gray-500 text-[10px] sm:text-sm md:text-base "
            aria-current="page"
          >
            {breads.find((x) => x.current)?.title}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default TopBreadCrumb;
