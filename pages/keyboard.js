import React, { Component, useRef } from 'react';
import styles from '../styles/VideoPlayer.module.css'

function Keyboard() {
    const inputRed = useRef(null);

    return (
        <div className={styles.videoPlayer}>
            <div style={{display:'none'}}>
                <input ref={inputRed} type="text" />
            </div>
            <button className={styles.btn} onClick={() => {
                inputRed.current.focus()
            }}>Show keyboard</button>
        </div>
    );
}

export default Keyboard;
