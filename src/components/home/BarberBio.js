import React from "react";

export function BarberBio({ image, name, bio }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-[#040404]">
      <img
        src={image}
        width="300"
        height="300"
        alt="Barber 1"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#343434]">{name}</h3>
        <p className="text-[#343434] dark:text-gray-400">{bio}</p>
      </div>
    </div>
  );
}
