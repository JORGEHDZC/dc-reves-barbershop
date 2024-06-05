import React from "react";

export function SectionBarbers({ title, summary, children, bg, id }) {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 bg-[${bg}] text-[#343434]`}
      id={id}
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-[700px] text-[#343434] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {summary}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}
