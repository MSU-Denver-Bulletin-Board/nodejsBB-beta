import addData from "@/firebase/firestore/addData"
import React, { useState } from 'react';

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleForm = async () => {

    if (file) {
      try {
        // Extract file metadata
        const { name, size, type } = file;

        // Store file metadata in Firestore
        const data = {
          name,
          size,
          type,
          timestamp: new Date().getTime() // Store timestamp as milliseconds
        };

        const {result, error} = await addData(props.users, props.userId, data)
        if (error) {
          return console.log(error)
        }

        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleForm}>Upload!</button>
    </div>
  );
};

export default Upload;
