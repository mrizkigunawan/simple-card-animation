import React from "react";
import { motion } from "framer-motion";
import TextLineBox from "./TextLineBox";

export default function Bigbox({ selectedNumber, toggleNumber }) {
  const colors = ["indigo", "gray", "gray", "gray", "gray", "gray"];

  return (
    <motion.div
      className="relative h-60 w-96 flex flex-col justify-between rounded-lg bg-white shadow-xl p-5 cursor-pointer"
      layoutId={selectedNumber}
      onClick={() => toggleNumber(0)}
    >
      <div className="space-y-3 animate-pulse">
        {colors.map((color, i) => (
          <TextLineBox key={i} color={color} />
        ))}
      </div>
      <motion.div
        className="w-full flex justify-between animate-pulse"
        variants={boxVariant}
      >
        {colors.slice(0, 4).map((a, i) => (
          <motion.div
            key={i}
            className="h-4 w-8 bg-indigo-200 rounded"
          ></motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const boxVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};
