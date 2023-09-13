import React from "react";
import Image from "next/image";

interface sizeProps{
  width: number;
  height: number;
}

const Logo: React.FC<sizeProps> = ({ width, height }) => {
  return (
      <Image
        src="/logo/SswLogo.svg"
        width={width}
        height={height}
        alt="Logo SSW"
      />
  );
};

export default Logo;
