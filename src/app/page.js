"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Upload from "./components/Upload"
// pages/index.js
// import FileUploadComponent from './components/Upload';

export default function Home() {

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
        <Upload users="testUser" userId="testUserId" />
    </div>
   
  );
}