import React from "react";
import useFirestore from '../Hooks/useFirestore'

const ImageGrid = ({setSelectedImg}) => {

    const { docs } = useFirestore('images');
    console.log('docs', docs);

  return (
      <div className="img-grid">
          { docs && docs.map(doc => (
              <div className="img-box" key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                  <img src={doc.url} alt="Image"/>
              </div>
          ))}
      </div>
  );
};

export default ImageGrid;
