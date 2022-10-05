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
                document.addEventListener('keydown', (event) => {
                    var name = event.key;
                    var code = event.code;
                    // Alert the key name and key code on keydown
                    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
                  }, false);
            }}>Show keyboard</button>
        </div>
    );
}

export default Keyboard;
