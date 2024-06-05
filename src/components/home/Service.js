import React from "react";

export function Service({ service, summary, children }) {
  return (
    <div className="grid gap-1">
      <div className="flex items-center gap-2">
        <div className="bg-[#E6B31E] p-2 rounded-full">{children}</div>
        <h3 className="text-lg font-bold text-[#343434]">{service}</h3>
      </div>
      <p className="text-sm text-[#343434] dark:text-gray-400">{summary}</p>
    </div>
  );
}
