import React from "react";
import { motion } from "framer-motion";

export default function Overlay({ children }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      variants={overlayVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
}

const overlayVariant = {
  hidden: { backgroundColor: "rgba(0,0,0,0)" },
  visible: { backgroundColor: "rgba(0,0,0,0.2)" },
};
