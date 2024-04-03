"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Upload from "./components/Upload";
import getData from "@/firebase/firestore/getData";
import { getDownloadURL } from 'firebase/storage';
import firebase from '../firebase/config';

// pages/index.js
// import FileUploadComponent from './components/Upload';

export default function Home() {
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    // Fetch image data, including the Data, from Firebase Firestore
    
    const fetchData = async () => {
      try {
        const {result, error, imageUrl} = await getData("testUser", "5"); // Assuming getData fetches image data including Data
        setImageData(imageUrl);
        if (error) {
          return console.log(error);
        }
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchData();
  }, []); 

  return(  
    <div className={styles.container}>
        <div className="logo-background">
            <div className="bulletin-board">
                <span className="red-text">Bulletin</span> Board
            </div>
        </div>
        <div className="logo">
            <img src="https://cdn.offcampusimages.com/public/upload/eagsvcpcbm1vru1k2u_taxmsbsflnehw4ztweyn_sng.png" alt="MSU Denver Logo" width="230"/>
        </div>
        <div className="footer-background">
          <div id="urgentMessageDisplay" className="urgent-message-ticker"></div>
        </div>
        <Upload />
        {imageData && (
          <Image src={imageData} alt="loading..." width={400} height={400} />
      )}
    </div>
   
  );
}