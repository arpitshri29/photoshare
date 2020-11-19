import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log("docs", docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-box"
            key={doc.id}
            whileHover={{ opacity: 1 }}
            layout
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="Image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transation={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
