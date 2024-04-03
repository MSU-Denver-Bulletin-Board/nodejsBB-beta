import addData from "@/firebase/firestore/addData"
import React, { useState } from 'react';
import uploadFileToStorage from "@/firebase/storage/uploadFileToStorage"

const Upload = () => {
  const [file, setFile] = useState(null);
  const [collectionName, setCollectionName] = useState("");
  const [id, setId] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleForm = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (file && collectionName && id) {
      try {
        // Upload file to storage and get download URL
        const imageUrl = await uploadFileToStorage(file);
        // Extract file metadata
        const { name, size, type } = file;

        // Store file metadata in Firestore
        const data = {
          name,
          size,
          type,
          imageUrl,
          timestamp: new Date().getTime() // Store timestamp as milliseconds
        };

        // Call addData function with input values
        const { result, error } = await addData(collectionName, id, data);
        if (error) {
          return console.log(error);
        }

        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.log("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleForm}>
      <label>
        Collection Name
        <input type="text" name="collection" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} />
      </label>
      <label>
        ID
        <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload!</button>
    </form>
  );
};

export default Upload;
