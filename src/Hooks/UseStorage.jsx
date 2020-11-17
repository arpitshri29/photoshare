import { useState, useEffect } from 'react';
import { appStorage } from "../firebase/config";

const useStorage = (image) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
      //References
      const storageRef = appStorage.ref(image.name);

      storageRef.put(image).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
      }, (err) => {
          setError(err);
      }, async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
      })
  }, [image]);

  return { progress, error, url }
};

export default useStorage;