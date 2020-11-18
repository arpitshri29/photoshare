import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";

const UploadForm = () => {

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const handleChange = (e) => {
      let selected = e.target.files[0];

      if (selected && types.includes(selected.type)){
          setImage(selected);
          setError('');
      } else {
          setImage(null);
          setError('Please select an image file (png, jpeg, jpg).');
      }
    };

    return (
        <form>
            <input type="file" name="upload" id="upload" onChange={handleChange}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {image && <div className="image">{image.name}</div>}
                {image && <ProgressBar image={image} setImage={setImage}/>}
            </div>
        </form>
    );
};

export default UploadForm;
