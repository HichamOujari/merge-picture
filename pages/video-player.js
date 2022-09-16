import React, { Component, useRef } from 'react';
import styles from '../styles/VideoPlayer.module.css'

function VideoPlayer() {
    const videoRef = useRef(null);
    const btnPlay = useRef(null);

    return (
        <div className={styles.videoPlayer}>
            <video loop playsInline onEnded={()=> btnPlay.current.style.display = 'block'} ref={videoRef} className={styles.video} src="/video.mp4" />
            <button ref={btnPlay} className={styles.btn} onClick={()=>{
               videoRef.current.play()
               btnPlay.current.style.display = 'none'
            }}>Play Video</button>
        </div>
    );
}

export default VideoPlayer;
