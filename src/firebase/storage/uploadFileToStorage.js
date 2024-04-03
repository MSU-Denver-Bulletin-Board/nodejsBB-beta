import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import firebase from '../config';

// Initialize Firebase Storage
const storage = getStorage(firebase);

const uploadFileToStorage = async (file) => {
  try {
    // Create a storage reference with a unique filename
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Upload file to storage
    await uploadTask;

    // Get the download URL once the upload is complete
    const downloadURL = await getDownloadURL(storageRef);

    // Return the download URL of the uploaded file
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file to storage:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
};

export default uploadFileToStorage;