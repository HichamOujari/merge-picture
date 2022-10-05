import React, { Component, useRef } from 'react';
import styles from '../styles/VideoPlayer.module.css'

function Keyboard() {
    const inputRed = useRef(null);

    return (
        <div className={styles.videoPlayer}>
            <input ref={inputRed} type="text" style={{width: '0px', height:"0px", background:'transparent',border: '1px solid transparent'}} />
            <button className={styles.btn} onClick={()=>{
               inputRed.current.focus()
            }}>Show keyboard</button>
        </div>
    );
}

export default Keyboard;
