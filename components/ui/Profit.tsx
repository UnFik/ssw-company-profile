import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    alt: string;
    title: string;
}

const ProfitComponent: React.FC<Props> = ({src, alt, title}) => {
  return (
    <div className="flex flex-col mx-auto">
      <Image
        className="mx-auto w-auto h-auto"
        src={src}
        alt={alt}
        width={200}
        height={200}
      />
      <h4 className="md:text-3xl text-xs mx-auto text-white font-semibold leading-3 md:leading-8 w-10/12">
        {title}
      </h4>
    </div>
  );
};

export default ProfitComponent