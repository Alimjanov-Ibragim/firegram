import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = e => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100
        }}
        src={selectedImg}
        alt=""
      />
    </motion.div>
  );
};

export default Modal;
