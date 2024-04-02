import React, { useState } from 'react';
import { storage } from '../../../firebase';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const uploadTask = storage.ref(`uploads/${file.name}`).put(file);
      uploadTask.on('state_changed',
        (snapshot) => {
          // Progress monitoring
        },
        (error) => {
          // Handle errors
          console.error(error);
        },
        () => {
          // Handle successful upload
          console.log('File uploaded successfully');
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
