import React from "react";
import { motion } from "framer-motion";
import TextLineBox from "./TextLineBox";

export default function Box({ number, toggleNumber }) {
  const colors = ["indigo", "gray", "gray"];
  return (
    <motion.div
      className="h-40 w-40 rounded-lg bg-white shadow-xl p-5 cursor-pointer"
      layoutId={number}
      onClick={() => toggleNumber(number)}
    >
      <div className="space-y-3">
        {colors.map((color, i) => (
          <TextLineBox key={i} color={color} />
        ))}
      </div>
    </motion.div>
  );
}
