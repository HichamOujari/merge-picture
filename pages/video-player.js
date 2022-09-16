import React, { Component, useRef, useState } from 'react';
import styles from '../styles/VideoPlayer.module.css'
import ReactPlayer from 'react-player'

function VideoPlayer() {
    const btnPlay = useRef(null);
    const [playing, setPlaying] = useState(false)

    const playVideo = () => {
        setPlaying(true)
        btnPlay.current.style.display = 'none'
    }

    const onEnded = () => btnPlay.current.style.display = 'block'

    return (
        <div>
            <div className={styles.videoWrapper}>
                <ReactPlayer playing={playing} className={styles.videoPlayer} width={'100vw'} height={'100vh'}  url={"/video.mp4"} />
            </div>
            <button ref={btnPlay} className={styles.btn} onClick={playVideo}>Play Video</button>
        </div>
    );
}

export default VideoPlayer;
