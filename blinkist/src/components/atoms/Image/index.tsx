import React from "react";

interface ImageProps {
  src: string;
  height?: string;
  width?: string;
}

const Image = ({ src, width, height }: ImageProps) => {
  return (
    <div>
      <img src={src} width={width} height={height} alt="imageComponent" />
    </div>
  );
};

export default Image;
