import React from "react";
import { CardImage } from "./CardImage";

export function SectionWelcome({ image, title, welcome }) {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y bg-[#E6B31E]">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <CardImage image={image} alt="DC Reves Barbershop" />
          <div className="flex flex-col items-start space-y-4">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#343434]">
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-[#343434] md:text-xl dark:text-gray-400">
              {welcome}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
