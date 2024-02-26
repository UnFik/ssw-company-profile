import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YoutubeFrameProps {
    src: string;
}

const YoutubeFrame: React.FC<YoutubeFrameProps> = ({src}) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        className="w-full h-full"
        src={src}
        title="YouTube Smart Sinergy World"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
}

export default YoutubeFrame