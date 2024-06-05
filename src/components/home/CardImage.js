import React from "react";

export function CardImage({ image, alt }) {
  return (
    <div>
      <img
        src={image}
        width="550"
        height="550"
        alt={alt}
        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
      />
    </div>
  );
}
