import React from "react";

export function SectionServices({ id, title, message, children }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-y" id={id}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#343434]">
              {title}
            </h2>
            <p className="max-w-[900px] text-[#343434] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {message}
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  );
}
