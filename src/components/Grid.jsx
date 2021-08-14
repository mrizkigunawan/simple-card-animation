import React from "react";

export default function Grid({ children }) {
  return (
    <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 gap-5 md:gap-10">
      {children}
    </div>
  );
}
