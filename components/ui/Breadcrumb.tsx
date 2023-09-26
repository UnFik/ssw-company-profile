import React from 'react'
import Link from 'next/link'
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);

  return (
    <div className="w-full bg-primary uppercase">
      <div className="pl-9 pr-10 lg:pl-32 md:pr-24 mx-auto py-6">
        <div className="flex flex-wrap items-center justify-start md:gap-5 gap-1">
          <Link href="/">
            <div className="text-white font-semibold text-xs md:text-base hover:text-gray-200">
              Beranda
            </div>
          </Link>
          {segments.map((segment, index) => (
            <React.Fragment key={index}>
              <DoubleArrowRightIcon
                width={30}
                height={15}
                className="text-white"
              />
              <Link href={`/${segments.slice(0, index + 1).join("/")}`}>
                <div className="text-white font-semibold text-xs md:text-base hover:text-gray-200">
                  {segment.replace(/-/g, " ")}
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb