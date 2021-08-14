import React from "react";

export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-xs sm:max-w-sm md: lg:max-w-xl">
      {children}
    </div>
  );
}