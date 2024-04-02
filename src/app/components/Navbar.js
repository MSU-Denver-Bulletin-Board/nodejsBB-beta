"use client"
import { useState, useEffect, useRef } from 'react';
import styles from "../styles/Navbar.module.css";

function Navbar() {
    const [dateTimeStr, setDateTimeStr] = useState('');

    // Refs for input fields
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // Function to update date and time
    function updateTime() {
        const now = new Date();
        const newDateTimeStr = now.toLocaleString('en-US', { 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hour12: true, 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        });
        setDateTimeStr(newDateTimeStr);
    }

    // Function to handle teacher login
    function teacherLogin(event) {
        event.preventDefault(); // Prevent form submission

        // Access input values using refs
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Your login logic here

        console.log('Attempting teacher login with:', email, password);
    }

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        // Your dropdown logic here
    }

    // Function to display urgent message
    function displayUrgentMessage() {
        const message = localStorage.getItem('urgentMessage');
        console.log(localStorage.getItem('urgentMessage')); // Should log the stored message, if any

        if (message) {
            // Your urgent message display logic here
        }
    }

    // Call updateTime on component mount
    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);
        updateTime(); // Initial call
        return () => clearInterval(intervalId); // Cleanup interval
    }, []);

    // Call displayUrgentMessage on component mount
    useEffect(() => {
        displayUrgentMessage();
    }, []);

    return (
        <div>
            <div className={styles.dateTime} id="date-time">{dateTimeStr}</div>
            {/* Dropdown content */}
            <div className={styles.logoBackground}>
                {/* Your dropdown content */}
            </div>
            {/* Urgent message display */}
            <div id="urgentMessageDisplay"></div>
        </div>
    );
}

export default Navbar;
