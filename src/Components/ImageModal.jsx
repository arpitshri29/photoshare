import React from "react";
import { motion } from "framer-motion";

const ImageModal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("img-modal")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="img-modal"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="Image"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default ImageModal;
