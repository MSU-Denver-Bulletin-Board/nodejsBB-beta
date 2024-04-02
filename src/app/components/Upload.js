// components/FileUploadComponent.js
import React, { useState } from 'react';
import db from '../../../firebase';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const fileRef = db.collection('files').doc(); // Generate unique document ID
        await fileRef.set({ name: file.name, url: '', timestamp: new Date() });

        const storageRef = firebase.storage().ref(`files/${fileRef.id}`);
        await storageRef.put(file);

        const url = await storageRef.getDownloadURL();
        await fileRef.update({ url });
        
        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
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
