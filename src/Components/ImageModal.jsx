import React from 'react';

const ImageModal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
      if (e.target.classList.contains('img-modal')){
          setSelectedImg(null);
      }
    };

    return (
        <div className="img-modal" onClick={handleClick}>
            <img src={selectedImg} alt="Image"/>
        </div>
    );
};

export default ImageModal;
