import React from "react";
import useFirestore from '../Hooks/useFirestore'

const ImageGrid = () => {

    const { docs } = useFirestore('images');
    console.log('docs', docs);

  return (
      <div className="img-grid">
          { docs && docs.map(doc => (
              <div className="img-box" key={doc.id}>
                  <img src={doc.url} alt="Image"/>
              </div>
          ))}
      </div>
  );
};

export default ImageGrid;
