import React from "react";

export default function Wrapper({ children }) {
  return (
    <div className="py-5 md:py-0 w-full md:h-screen bg-gradient-to-r from-indigo-600 to-indigo-700 flex items-center justify-center">
      {children}
    </div>
  );
}
